import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="contact">

         <div className="row">
            <div class="four columns"> <i class="fa fa-map-marker fa-2x"></i>
               <p className="address">{name}<br/>
                  {city}, {state} {zip}</p>
            </div>

            <div class="four columns"> <i class="fa fa-envelope-o fa-2x"></i>
               <p>{email}</p>
            </div>

            <div class="four columns"> <i class="fa fa-phone fa-2x"></i>
                <p>{phone}</p>
            </div>
      </div>
   </section>
    );
  }
}

export default Contact;
