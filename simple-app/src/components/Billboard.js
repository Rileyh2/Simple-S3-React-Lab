import './Billboard.css';
function Billboard(){

    return (
        <div className="jumbotron jumbotron-fluid d-flex align-items-center">
        <div className="container">
            <h1 className="display-4">Welcome!</h1>
            <p className="lead">This is a test site meant to showcase how to setup a static react project using AWS S3 buckets.</p>
        </div>
        </div>
    );
};

export default Billboard;
