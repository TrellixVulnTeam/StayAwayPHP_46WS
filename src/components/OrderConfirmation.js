import React from "react";
import "../style/OrderConfirmation.css";

const OrderConfirmation = () => {
  return (
    <div className="fullScreen">
      <div className="google-map-code">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12794387.590994952!2d11.51239101424322!3d38.47310751172323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2zSsOpcnVzYWxlbSwgSXNyYcOrbA!3m2!1d31.768318999999998!2d35.21371!4m5!1s0x47f4ea4ac9e1fd2f%3A0xabc36e768b27c9a0!2sWild%20Code%20School%20-%20Formation%20d%C3%A9veloppeur%20web%20%26%20data%20analyst%2C%2017%20Rue%20Delandine%2C%2069002%20Lyon!3m2!1d45.746291199999995!2d4.8271688!5e0!3m2!1sfr!2sfr!4v1605860829275!5m2!1sfr!2sfr"
          width="1100"
          height="600"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
        <div classeName="ClovisHome">
          <img className="gif" src="../images/chevalier.gif" alt="logo" />

          <p className="ClovisHome-p">Clovis is arriving with your order.</p>
          <p className="ClovisHome-p">
            He will arrived with his horse in 2.5 months.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
