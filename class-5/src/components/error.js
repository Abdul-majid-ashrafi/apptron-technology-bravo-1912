import React from 'react';

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorMsg: ""
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        if (error === "internet") {
            this.setState({ errorMsg: "You need to connect internet for this service" })
        } else if (error === "class") {
            this.setState({ errorMsg: "Wrong Class" })
        } else {
            this.setState({ errorMsg: "went something wrong" })
        }
        // You can also log the error to an error reporting service
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>{this.state.errorMsg}.</h1>;
        }

        return this.props.children;
    }
}