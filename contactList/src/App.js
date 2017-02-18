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
          {/* <input type="button" className="btn btn-warning" value="Remove" /> */}
        </td>
      </tr>
    );
  }
});

var Contact = React.createClass ({
  render: function(){
    console.log('Contact');
    console.log(this.props.contact.name)
    //var contactRows = this.props.contactList.map(function(item, index){
    return (
      <tr>
      <td>{this.props.contact.name}</td>
      <td>{this.props.contact.address}</td>
      <td>{this.props.contact.phone_number}</td>
      <td><input type="button" className="btn btn-info" value="Edit" /></td>
      <td><input type="button" className="btn btn-danger" value="Remove" /></td>
      </tr>
      );
  }
});

var ContactList = React.createClass({
  render: function(){
    console.log('ContactsList');
    //console.log(this.props.contacts);
    //var contactRows = null; //TODO  initailize to an array of contact elements
    var contactRows = this.props.contacts.map(contact => {
        return <Contact key={contact.name} contact={contact} />
    });
    console.log(this.contactRows);
    return (
      <tbody>
        {contactRows}
        <ContactForm />
      </tbody>
    );
  }
});

var ContactsTable = React.createClass({
  render: function(){
    //console.log('ContactsTable');
    //console.log(this.props.contacts);
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
    //console.log('ContactsApp');
    //console.log(this.props.contacts);
    return(
      <div>
        <h1>Contact List.</h1>
        <ContactsTable contacts={this.props.contacts} />
      </div>
    );
  }
});

export default ContactsApp;
