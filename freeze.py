from flask_frozen import Freezer
from app import app

freezer = Freezer(app)

# # Define custom URL generator
# @freezer.register_generator
# def url_generator():
#     yield '/'
#     yield '/selected-works'
#     yield '/cv'
#     yield '/mountains'


if __name__ == '__main__':
    freezer.freeze()