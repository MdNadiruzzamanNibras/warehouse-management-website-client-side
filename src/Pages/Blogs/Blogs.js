import React from 'react';

const Blogs = () => {
    return (
        <div className="container">
            <div className="row">
                <h2> Difference between javascript and nodejs?</h2>
                <p>Javascript and nodejs main difference  javascript is  run client site and nodejs is run server site. Javascript is used for writing scripts on the website and nodejs used to javascript runing. Javascript is capable to HTML play dom but node is not capable. Javascript is used just frontend development other hand nodejs used server site development. Javascript used framework is  RamdaJS, TypedJS etc and nodejs used framework Lodash, express etc. </p>

                <h2>When should you use nodejs and when should you use mongodb?</h2>
                <p>When we used javascript fonted then we can used backend for nodejs. As nodejs  is a bigest open source platform. It has npm packages is 65000 code free source. When you used NO-SQL database you must used mongodb. It's  a safe  No-SQL database and It is popular database.</p>
                <h2>Differences between sql and nosql databases.</h2>
                <p>sql is a call realtion database and nosql is call no-realtion database. sql is used query language and have schema other hand nosql is used dynamic schema and unstructured data. sql is vertically scalable and nosql is horizontally scalable. sql database is tablebase and nosql is document, key-value, graph and wide-column stores. </p>
                <h2> What is the purpose of jwt and how does it work</h2>
                <p>JWT is security api. It's used purpose is unwanted person can't access the website. It's work two parties web authiraty and web user.</p>
            </div>
        </div>
    );
};

export default Blogs;