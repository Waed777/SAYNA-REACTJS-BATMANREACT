import React from 'react';

function NotFoundPage() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <img className="img-fluid" src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
          </div>
          <div className="col-md-6 text-center mt-5">
            <h1>404 ERROR</h1>
            <h6>Cette page n'existe pas ou n'existe plus</h6>
            <button>Allez sur notre page d'accueil</button> &nbsp;
            <button>Voir nos produits</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;

