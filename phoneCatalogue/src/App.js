import React from 'react';
import './App.css'

var SelectBox = React.createClass({
  render: function(){
    return (
      <div className="col-md-10">
      <input type="text" placeholder="Search" />
      Sort by:
      <select>
        <option value="name">Alphabetical</option>
        <option value="age">Newest</option>
      </select>
      </div>
    );
  }
});

// TODO (missing component)
var PhoneItem = React.createClass({
  render: function(){
    //console.log('PhoneItem');
    //console.log(this.props.phone.name);
    return(
      <li className="thumbnail phone-listing">
        <a href={this.props.phone.id} className="thumb">
          <img src={this.props.phone.imageUrl} alt={this.props.phone.name} />
        </a>
        <a href={this.props.phone.id}>{this.props.phone.name}</a>
        <p>{this.props.phone.snippet}</p>
      </li>
    );
  }
});

var FilteredPhoneList = React.createClass({
  render: function(){
    console.log('FilteredPhoneList');
    var displayedPhones = this.props.phones.map(function(phone) {
      return <PhoneItem key={phone.id} phone={phone} /> ;
    }) ;
    return (
      <div className="col-md-10">
        <ul className="phones">
          {displayedPhones}
        </ul>
      </div>
    ) ;
  }
});


var PhoneCatalogueApp = React.createClass({
  render: function(){
    console.log('PhoneCatalogueApp');
    //console.log(this.props.phones);
    return (
      <div className="view-container">
        <div className="view-frame">
          <div className="container-fluid">
            <div className="row">
              <SelectBox  />
              <FilteredPhoneList phones={this.props.phones}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default PhoneCatalogueApp;
