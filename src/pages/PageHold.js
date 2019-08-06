import React from 'react';

const PageHold = props => {
    const { name } = props;

    return (
        <React.Fragment>
            <h1 className={`${name}__heading`}>
                our {name}
            </h1>

            <div className="relax">
                <span className="relax__rotate" />
                <p> Relax</p>
                <p> We'r still organizing this page content</p>
            </div>
        </React.Fragment>
    )
}

export default PageHold;