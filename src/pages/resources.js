import React, {Component} from 'react';

class Resources extends Component {
  render(){
    return (
      <div>
        <div>
          <h1>Resources</h1>
          <h2>Resources and system requirements for the general course and for each activity.</h2>
        </div>
        <nav>
          <ul>
            <li>Zoo Tools for Google Sheets
              <ul>
                <li>For Instructors</li>
                <li>System Requirements</li>
              </ul>
            </li>
            <li>Without Add-on Guide</li>
          </ul>
        </nav>
        <section>
          <h2>Zoo Tools for Google Sheets</h2>
          <p>
            A custom Google Sheets add-on built to assist with plotting and data analysis. The current version of the tool contains helpers for scatter plots, histograms, and basic statistics. The additional student survey form and map helper is specific to <a href="">Introduction to the Data Analysis Platform</a> for teaching how to use the add-on. The add-on is already installed if the templated Google Sheets for each activity is used. Alternatively, instructors and students can <a href="https://chrome.google.com/webstore/detail/zoo-tools-for-sheets/bnodkbhblaaopkdmlhaglnfnogahbkfe?hl=en-US&gl=US&authuser=0">install the add-on</a> for their Google account independently.
          </p>
          <p>
            <strong>Important for instructors:</strong>
            <br/>
            Your university's Google Apps for Education domain may have a policy in place to disallow add-ons. If your university disallows add-ons, you will either need to request this add-on to be white listed in your university's Google Apps for Education domain, direct your students to <a href="https://accounts.google.com/SignUp?hl=en" target="_blank">setup Google accounts</a> to install the add-on outside of your university's domain, or you can choose to <a href="">implement the activities without the add-on</a>.
          </p>
          <table>
            <caption>System requirements for Zoo tools for Google Sheets</caption>
            <thead>
              <tr>
                <th>Hardware</th>
                <th>Browser</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Desktops or laptops using recent versions of either Windows, OS X, or Linux.<br/><br/>
                  <em>Note: Google Sheets Add-ons are disabled for mobile and tablet devices. Google Sheets can be edited using the Google Sheets app available for <a href="https://support.google.com/docs/answer/6000292?hl=en&ref_topic=20322" target="_blank">iOS</a> and <a href="https://support.google.com/docs/answer/4532705?hl=en&ref_topic=20322" target="_blank">Android</a>. Standard spreadsheet functions are available for both Android and iOS apps. Charts are only available for the Android app. <a href="">Read more on how to implement the activities without the add-on.</a></em>
                </td>
                <td>
                  Current and last version of Chrome, Safari, or Firefox. Google Sheets is only supported in Internet Explorer 11.
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <small><a href="https://github.com/zooniverse/zootools-sheets">Source Code</a></small>
            <i className="fa fa-ellipsis-v"></i>
            <small>
              <a href="https://github.com/zooniverse/zootools-sheets/issues">Report Bugs</a><br/>
              <em>Please include operating system and browser version with bug reports.</em>
            </small>
          </p>
        </section>
        <section>
          <h2>Activities without the Add-on Guide</h2>
          <p>Google Sheets provides support for standard A1 functional notation as well as charts and plotting. Several guides are available online:
            <ul>
              <li><a href="https://support.google.com/docs/table/25273?hl=en" target="_blank">List of spreadsheet functions</a></li>
              <li><a href="https://support.google.com/docs/answer/63728?hl=en" target="_blank">Adding charts</a></li>
              <li><a href="https://www.youtube.com/watch?v=9TiXR5wwqPs" target="_blank">Explore button to automate plots and statistics generation</a> <em>Note: video</em></li>
              <li><a href="https://support.google.com/docs/answer/2763167?hl=en&ref_topic=20331" target="_blank">How to edit spreadsheets on Android</a></li>
              <li><a href="https://support.google.com/docs/answer/3423701?hl=en&ref_topic=20331" target="_blank">How to edit spreadsheets on iOS.</a> <em>Note: Charts are not available for the iOS app.</em> </li>
            </ul>
          </p>
          <p>
            <strong>Important for instructors:</strong><br/>
            All of the activities can be done without the add-on except for the HR Diagram activity's plot which requires the ability to invert the y-axis. The add-on has this custom built feature. A work around is being developed for non-add-on users.
          </p>
        </section>
        <section>
          <div>
            <small>This material is based upon work supported by the National Science Foundation under Grant Number NSF-IUSE 1524189. Any opinions, findings, and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Science Foundation.</small>
          </div>
        </section>
      </div>
    )
  }
}

export default Resources;
