import React from 'react';
import Header from './header.js';
import Description from './description.js';
import TabBar from './tabBar.js';
import Tab0 from './tab0.js';
import Tab1 from './tab1.js';
import Tab2 from './tab2.js';
import LoadScreen from './loadScreen.js';
import $ from 'jquery';
import html2canvas from 'html2canvas';


import './static/App.scss';
import cardStyle from './static/card.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.step1 = this.step1.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.checkFields = this.checkFields.bind(this);
    this.step2 = this.step2.bind(this);
    this.step3 = this.step3.bind(this);
    this.loadToggle = this.loadToggle.bind(this);
    this.step4 = this.step4.bind(this);
    this.state = {
      step: 0,
      tabNames: [
        'INPUT', 'PREVIEW', 'DOWNLOAD'
      ],
      data: {
        firstName: '',
        lastName: '',
        companyName: '',
        emailAddress: '',
        phoneNumber: ''
      },
      load: false,
    }
  }

  step1() {
    // proceeds to step 1, opening first tab
    if (this.state.step < 1) {
      this.setState({
        step: 1
      });
    }
  }

  async validateEmail(email) {
    // makes sure that an email is validate
    const apiKey = '51b37e223a47a676adc1e64ef2715146'
    var URL = 'http://apilayer.net/api/check?access_key=' + apiKey + '&email=' + email;

    console.log(URL);

    var request = await $.ajax({
      url: URL,
      dataType: 'json'
    });

    return request.smtp_check;
  }

  validatePhone(number) {
    // checks that phone number is correct length and all chars are numeric

    if (number.length === 10 && typeof(number) === 'string') {
      for (var i = 0; i < number.length; i++) {
        if (isNaN(parseInt(number))) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }

  checkFields(obj) {
    // ensures the object passed only has strings for values and
    // no empty strings

    var key;
    for (key of Object.keys(obj)) {

      if (typeof(obj[key]) !== "string" || obj[key].length < 1) {
        return false;
      }
    }

    return true;
  }

  async step2(inputs) {
    // proceeds to step 2 and opens 2nd tab if validations PASS
    const emailPass = await this.validateEmail(inputs.emailAddress);
    const phonePass = this.validatePhone(inputs.phoneNumber);
    const noBlanks = this.checkFields(inputs);

    if (emailPass && phonePass && noBlanks)  {
        // add input keys and values to placeholder variable
        var newData = {};
        var key;
        for (key of Object.keys(inputs)) {
          newData[key] = inputs[key];
        }

        // add data to the state
        this.setState({
          step: 2,
          data: newData
        });
    } else {
      alert('Please check that all fields are filled and that phone and email are valid');
    }
  }

  step3() {
    // flips us to the final step
    this.setState({
      step: 3
    })
  }

  loadToggle() {
    //alert(this.state.load);
    this.setState((state) => ({
      load: !state.load
    }));
  }

  deliverCard() {
    // identity the card and make clone which is hidden off screen
    const card = document.getElementById('final-card')

    window.scrollTo(0,0);

    // html2canvas to make the image
    html2canvas(card).then(canvas => {
        document.body.appendChild(canvas)
        var image = canvas.toDataURL('image/png');

        //make and use link to downloads
        const link = document.createElement('a');
        const filename = 'yourCard.png';
        document.body.appendChild(link);
        link.download = filename;
        link.href = image;
        link.click();

        //remove link and canvas
        document.body.removeChild(link);
        document.body.removeChild(canvas);

        this.loadToggle();
    });
  }

  async step4() {
    // creates the jPEG and downloads
    this.loadToggle()

    this.deliverCard();
  }

  render() {
    var activeTab;
    var overlay;
    var tabBar;

    if (this.state.load) {
      overlay = <LoadScreen/>
    } else {
      overlay = null;
    }

    if (this.state.step > 0) {
      tabBar = (
        <TabBar
          step={this.state.step}
          tabNames={this.state.tabNames}
        />
      );
      if (this.state.step === 1) {
        activeTab = (
          <Tab0
            data={this.state.data}
            onSubmit={this.step2}
          />
        );
      } else if (this.state.step === 2) {
        activeTab = (
          <Tab1
            data={this.state.data}
            onClick={this.step3}
          />
        );
      } else if (this.state.step === 3) {
        activeTab = (
          <Tab2
            data={this.state.data}
            onClick={this.step4}
          />
        );
      } else if (this.state.step > 3) {
        alert('Major Error!');
      } else {
        activeTab = null;
      }
    } else {
      tabBar = null;
    }

    return (
      <div id='frame'>
        {overlay}
        <Header/>
        <Description
          onClick={this.step1}
        />
        {tabBar}
        <div id='tab-contents'>
          {activeTab}
        </div>
      </div>
    );
  }
}

export default App;
