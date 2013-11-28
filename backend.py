from flask import Flask, render_template, g, request, jsonify
from redis import Redis


app = Flask(__name__)


@app.before_request
def connect_to_redis():
    g.redis = Redis()


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/click/<i>/')
def click(i):
    g.redis.incr(i)
    return jsonify(status='OK')


@app.route('/score/<club>/')
def score(club):
    score = g.redis.get(club)
    score = 0 if score is None else int(score)
    return jsonify(score=score)


if __name__ == '__main__':
    app.run(debug=True)
