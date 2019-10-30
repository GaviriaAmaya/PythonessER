import React, { Component } from 'react';

export default class Epslist extends Component {

router.get('/', function(req, res, next) {
  res.locals.connection.query('SHOW TABLES', function (error, results, fields) {
    if (error) throw error;
    res.send(JSONstringify({"status": 200, "error": null, "response": results}));
    });
});

    render() {
        return(
        <buttondropdown onSubmit={this.onSubmit}>
            <input type="text" 
                placeholder="EPS" 
                name="title"
            />
            <br/>
        </buttondropdown>
    )
}
    
}
