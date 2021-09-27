from fastapi import FastAPI, Request, Form
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates


app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates/")


@app.get('/favicon.ico')
def read_root():
    return 'hello world'


@app.get('/blog',response_class=HTMLResponse)
def blog(request: Request):
	return templates.TemplateResponse('index.html', context={'request': request})
