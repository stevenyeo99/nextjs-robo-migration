const ErrorBoundry = (props) => {

    let component = null;
    try {
        component = props.children;
    } catch (error) {
        component = <h1>Oops got error!</h1>;
    }

    return component;
};

export default ErrorBoundry;