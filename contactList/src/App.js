import React from 'react';

var ContactForm = React.createClass({
  render: function(){
    return(
      <tr>
        <td>
          <input type="text" className="form-control" />
        </td>
        <td>
          <input type="text" className="form-control" />
        </td>
        <td>
          <input type="text" className="form-control" />
        </td>
        <td>
          <input type="button" className="btn btn-primary" value="Add" />
        </td>
        <td>
          <input type="button" className="btn btn-warning" value="Remove" />
        </td>
      </tr>
    );
  }
});

var Contact = React.createClass ({
  render: function(){
/*
    var contactRows = this.props.contactList.map(function(item, index){
      return (
        <div>
        <td>{this.item.name}</td>
        <td>{this.item.address}</td>
        <td>{this.item.phone_number}</td>
        <td></td>
        <td></td>
        </div>
      )
    });
*/
    return (
      <tr>
        {/*todo   {contactRows}  */}
      </tr>
      );
  }
});

var ContactList = React.createClass({
  render: function(){
    var contactRows = null; //TODO  initailize to an array of contact elements
    //var contactRows = JSON.parse(this.props.contacts);
    return (
      <tbody>
        {/* <Contacts contactRows={this.contractRows} /> */ }
        {contactRows}
        <ContactForm />
      </tbody>
    );
  }
});

var ContactsTable = React.createClass({
  render: function(){
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <ContactList contacts={this.props.contacts} />
      </table>
    );
  }
});

var ContactsApp = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Contact List.</h1>
        <ContactsTable contacts={this.props.contacts} />
      </div>
    );
  }
});

export default ContactsApp;
