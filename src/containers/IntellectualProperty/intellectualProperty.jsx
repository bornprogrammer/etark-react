import React from 'react';
import Navbar from '../../components/Header/Header.jsx';

import heroChair from '../../static/images/hero-image.png';
import './intellectualProperty.css';
const About = () => {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: 'center', margin: '0 5%', marginTop: '5vh' }}>
        <div></div>
        <div style={{ margin: '3% 20vw' }}>
          <h1>Intellectual Property</h1>
          <div class="aboutList">
            <p>
              <br />
              <br />
              We are either the owner of intellectual property rights or have
              the non-exclusive, worldwide, perpetual, irrevocable, royalty
              free, sub-licensable (through multiple tiers) right to exercise
              the intellectual property, in the Platform, and in the material
              published on it including but not limited to user interface,
              layout format, Order placing process flow and any content thereof.
              <br />
              <br />
              You recognize that ETark is the registered owner of the word mark
              ‘ETark’ and the logo including but not limited to its variants
              (IPR) and shall not directly or indirectly, attack or assist
              another in attacking the validity of, or ETark’s or its affiliates
              proprietary rights in, the licensed marks or any registrations
              thereof, or file any applications for the registration of the
              licensed marks or any names or logos derived from or confusingly
              similar to the licensed marks, any variation thereof, or any
              translation or transliteration thereof in another language, in
              respect of any products/services and in any territory throughout
              the world. If you become aware or acquire knowledge of any
              infringement of IPR you shall report the same at admin@etark.in
              with all relevant information.
              <br />
              <br />
              You may print off one copy, and may download extracts, of any
              page(s) from the Platform for your personal reference and you may
              draw the attention of others within your organisation to material
              available on the Platform.
              <br />
              <br />
              You must not modify the paper or digital copies of any materials
              you have printed off or downloaded in any way, and you must not
              use any illustrations, photographs, video or audio sequences or
              any graphics separately from any accompanying text.
              <br />
              <br />
              You must not use any part of the materials on the Platform for
              commercial purposes without obtaining a licence to do so from us
              or our licensors.
              <br />
              <br />
              If you print off, copy or download any part of the Platform in
              breach of these Terms of Use, your right to use the Platform will
              cease immediately and you must, at our option, return or destroy
              any copies of the materials you have made.
              <br />
              <br />
              <br />
              ETark uses a patented process registered under the name of it’s
              founder Mr. Rahul Kumar Mandal under The Patents Act, 1970 for
              some of its products and processes after being implicitly granted
              permission to do so by the patent holder as long as the patent
              holder is part of the company and the primary proprietor of this
              venture. Any unauthorized emulation of ETark’s process is
              punishable by law and appropriate legal actions shall be
              instituted against the other party (individual, firm, company,
              trust, or any other entity), if found guilty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
