import React from 'react';
import Navbar from '../../components/Header/Header.jsx';

import heroChair from '../../static/images/hero-image.png';
import './disclaimer.css';
const About = () => {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: 'center', margin: '0 5%', marginTop: '5vh' }}>
        <div></div>
        <div style={{ margin: '3% 20vw' }}>
          <h1>Disclaimers</h1>
          <div class="aboutList">
            <p>
              THE PLATFORM MAY BE UNDER CONSTANT UPGRADES, AND SOME FUNCTIONS
              AND FEATURES MAY NOT BE FULLY OPERATIONAL.
              <br />
              <br />
              DUE TO THE VAGARIES THAT CAN OCCUR IN THE ELECTRONIC DISTRIBUTION
              OF INFORMATION AND DUE TO THE LIMITATIONS INHERENT IN PROVIDING
              INFORMATION OBTAINED FROM MULTIPLE SOURCES, THERE MAY BE DELAYS,
              OMISSIONS, OR INACCURACIES IN THE CONTENT PROVIDED ON THE PLATFORM
              OR DELAY OR ERRORS IN FUNCTIONALITY OF THE PLATFORM. AS A RESULT,
              WE DO NOT REPRESENT THAT THE INFORMATION POSTED IS CORRECT IN
              EVERY CASE.
              <br />
              <br />
              WE EXPRESSLY DISCLAIM ALL LIABILITIES THAT MAY ARISE AS A
              CONSEQUENCE OF ANY UNAUTHORIZED USE OF CREDIT/ DEBIT CARDS.
              <br />
              <br />
              YOU ACKNOWLEDGE THAT THIRD PARTY SERVICES ARE AVAILABLE ON THE
              PLATFORM. WE MAY HAVE FORMED PARTNERSHIPS OR ALLIANCES WITH SOME
              OF THESE THIRD PARTIES FROM TIME TO TIME IN ORDER TO FACILITATE
              THE PROVISION OF CERTAIN SERVICES TO YOU. HOWEVER, YOU ACKNOWLEDGE
              AND AGREE THAT AT NO TIME ARE WE MAKING ANY REPRESENTATION OR
              WARRANTY REGARDING ANY THIRD PARTY'S SERVICES NOR WILL WE BE
              LIABLE TO YOU OR ANY THIRD PARTY FOR ANY CONSEQUENCES OR CLAIMS
              ARISING FROM OR IN CONNECTION WITH SUCH THIRD PARTY INCLUDING, AND
              NOT LIMITED TO, ANY LIABILITY OR RESPONSIBILITY FOR, DEATH, INJURY
              OR IMPAIRMENT EXPERIENCED BY YOU OR ANY THIRD PARTY. YOU HEREBY
              DISCLAIM AND WAIVE ANY RIGHTS AND CLAIMS YOU MAY HAVE AGAINST US
              WITH RESPECT TO THIRD PARTY'S / SERVICE PARTNER’S/ SP SERVICES.
              <br />
              <br />
              ETARK DISCLAIMS AND ALL LIABILITY THAT MAY ARISE DUE TO ANY
              VIOLATION OF ANY APPLICABLE LAWS INCLUDING THE LAW APPLICABLE TO
              PRODUCTS AND SERVICES OFFERED BY THE SERVICE PARTNER OR LOGISTICS
              PARTNER. WHILE THE MATERIALS PROVIDED ON THE PLATFORM WERE
              PREPARED TO PROVIDE ACCURATE INFORMATION REGARDING THE SUBJECT
              DISCUSSED, THE INFORMATION CONTAINED IN THESE MATERIALS IS BEING
              MADE AVAILABLE WITH THE UNDERSTANDING THAT WE MAKE NO GUARANTEES,
              REPRESENTATIONS OR WARRANTIES WHATSOEVER, WHETHER EXPRESSED OR
              IMPLIED, WITH RESPECT TO PROFESSIONAL QUALIFICATIONS, EXPERTISE,
              QUALITY OF WORK OR OTHER INFORMATION HEREIN. FURTHER, WE DO NOT,
              IN ANY WAY, ENDORSE ANY SERVICE OFFERED OR DESCRIBED HEREIN. IN NO
              EVENT SHALL WE BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY
              DECISION MADE OR ACTION TAKEN IN RELIANCE ON SUCH INFORMATION.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
