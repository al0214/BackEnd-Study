from fastapi import FastAPI
from web import explorer, creature


app = FastAPI()

app.include_router(explorer.router)
app.include_router(creature.router)


@app.get("/")
def top():
    return "top here"


@app.get("/echo/{thing}")
def echo(thing):
    return f"eching {thing}"


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", reload=True, port="8080")
