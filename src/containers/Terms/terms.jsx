import React from 'react';
import Navbar from '../../components/Header/Header.jsx';
import './style.css';
const btnenable = () => {
  var checkBox = document.getElementById('tnc');
  var button = document.getElementById('nextbtn');

  if (checkBox.checked == true) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};
const terms = () => {
  return (
    <div className={'bstermDiv'}>
      <Navbar />
      <div className={'form-bod'}>
        <h1>User Terms & Conditions</h1>
        <div className={'tnc-bod'}>
          <p>
            <p>
              This document is an electronic record in terms of Information
              Technology Act, 2000 and rules there under as applicable and the
              amended provisions pertaining to electronic records in various
              statutes as amended by the Information Technology Act, 2000. This
              document is published in accordance with the provisions of Rule 3
              (1) of the Information Technology (Intermediaries guidelines)
              Rules, 2011 that require publishing the rules and regulations,
              privacy policy and Terms of Use for access or usage of
              www.etark.in website.
            </p>
            <h2>Terms of Use</h2>
            <br />
            <br />
            <p>
              These terms of use (the "Terms of Use") govern your use of our
              website www.etark.in (the "Website"). The Website is also referred
              to as the "Platform". Please read these Terms of Use carefully
              before you use the services. If you do not agree to these Terms of
              Use, you may not use the services on the Platform, and we request
              you to uninstall the App. By installing, downloading or even
              merely using the Platform, you shall be contracting with ETark and
              you signify your acceptance to this Terms of Use and other ETark
              policies (including but not limited to the Refund and Cancellation
              Policy, Privacy Policy, Payments Policy, Shipping Policy,
              Intellectual Property and Disclaimer) as posted on the Platform
              and amended from time to time, which takes effect on the date on
              which you download, install or use the Platform, and create a
              legally binding arrangement to abide by the same.
            </p>
            <br />
            <br />
            <p>
              The Platform is owned and operated by ETark Technology Private
              Limited, a company incorporated under the Companies Act, 2013 (18
              of 2013), and having its registered office at E- 201, Mall
              Enclave, 13 K.B. Sarani, Dum Dum, Kolkata - 700080 which
              expression shall, unless it be repugnant to the context or meaning
              thereof, be deemed to mean and include all our successors,
              affiliates and assigns. For the purpose of these Terms of Use,
              wherever the context so requires, "you", “user/s”, or “User/s” or
              “Buyer/s” shall mean any natural or legal person who shall
              transact on the Platform by providing registration data while
              registering on the Platform as a registered user using any
              computer systems. The terms "ETark", "we", "us" or "our" shall
              mean ETark Technology Private Limited.
            </p>
            <br />
            <br />
            <p>
              ETark enables transactions on its Platform between participating
              Service Centers also referred to as “Service Partners” and
              “Users”, dealing in (a) Servicing of electronic devices and (b)
              other products and services ("Platform Services"). The buyers
              ("Buyer/s") can choose and place orders ("Orders") for repair and
              maintenance of electronic devices (also referred to as “Devices”
              here) of various brands listed for various cities on the Platform.
              Further, the Buyer can also place Orders for getting his device
              complaint analyzed instantly from legal or compliance perspective
              on the Platform (“Complaint Report”).
            </p>
            <br />
            <br />
            <p>
              ETark enables physical pickup and delivery of such Orders at
              select localities of serviceable cities across India ("Delivery
              Services") by connecting third party service provider(s) i.e.
              logistics partner(s) (“Logistics Partner/s”) who will be
              responsible for providing the pick-up and delivery services
              initiated by the users of the Platform (Buyers or Service
              Partners). ETark enables instant analysis of such Orders for any
              location across India on it’s Platform("Complaint Analysis
              Services"). The Platform Services, the Delivery Services and the
              Complaint Analysis Services are collectively referred to as
              "Services". For both Platform Services and Delivery Services,
              ETark is merely acting as an intermediary between the Service
              Partner and Buyers and/or Logistics Partners and Users/Service
              Partners.
            </p>
            <br />
            <br />
            <p>
              Service Partners (SP) are individual or company operated Service
              Centers authorized by various device manufacturers to Service the
              device. These Service Partners are engaged with ETark on a
              voluntary, non-exclusive and principal to principal basis to
              provide aforementioned services. SPs are independent contractors
              and are free to determine their timings of work. ETark does not
              exercise control on the SPs and the relationship between the SPs
              and ETark is not that of an agent and principal or employee and
              employer.
            </p>
            <br />
            <br />
            <p>
              For the servicing of device services under the pickup and delivery
              services, SPs may charge the users of the Platform (Buyers), a
              service fee (inclusive of applicable taxes whenever not expressly
              mentioned) determined on the basis of various factors including
              but not limited to Servicing Policies set by the device
              manufacturer.
            </p>
            <br />
            <br />
            <h2>Amendments</h2>
            <br />
            <p>
              These Terms of Use are subject to modifications. We reserve the
              right to modify or change these Terms of Use and other ETark
              policies at any time by posting modified documents on the Platform
              and without prior notice to You. You shall be liable to update
              yourself of such changes, if any, by accessing the same. You
              shall, at all times, be responsible for regularly reviewing the
              Terms of Use and the other ETark policies and note the changes
              made on the Platform. Your continued usage of the Services after
              any change is posted constitutes your acceptance of the amended
              Terms of Use and other ETark policies. As long as you comply with
              these Terms of Use, ETark grants you a personal, non-exclusive,
              non-transferable, limited privilege to access, enter, and use the
              Platform. By accepting these Terms of Use, you also accept and
              agree to be bound by the other terms and conditions and ETark
              policies (including but not limited to Cancellation & Refund
              Policy, Privacy Policy, Payments Policy, Shipping Policy,
              Intellectual Property, Disclaimer) as may be posted on the
              Platform from time to time.
            </p>
            <br />
            <br />
            <h>Use of Platform and Services</h>
            <br />
            <br />
            <p>
              Any service fee payment asked for by the Service Partner is based
              on the Proforma Invoice and Final Invoice shared by the SP with
              the user through our platform which are governed by policies
              including but not limited to Master Service Agreement between the
              Service Partner and the Device Manufacturer of the particular
              brand of that device. The commercial/contractual terms of the
              Master Service Agreement include without limitation price,
              applicable taxes, warranty consideration policy, payment terms,
              date, Statement of work and after sales services related to
              products and services. ETark does not have any control or does not
              determine or advise or in any way involve itself in the offering
              or acceptance of such commercial/contractual terms between the
              Service Partner and Device Manufacturer. ETark may, however, offer
              support services to Service Partner in respect to Order
              fulfilment, mode of payment, payment collection, call centre
              support and other ancillary services, pursuant to independent
              contracts executed by ETark with the Service Partner. The price of
              the Servicing services offered by the Service Partner are
              determined by the Service Partner itself and ETark has no role to
              play in such determination of price in any way whatsoever.
              Information about the health of the device given by the Service
              Partner, it’s status and the other details like possible problems
              inspected and found in the device post inspection at the Service
              Partner’s end, the physical condition of the device and the device
              details like IMEI No., warranty consideration etc shall be
              considered as final and accurate and it shall be applicable on the
              User. ETark shall be absolved of any liability arising out of any
              defect, external or internal damage including but not limited to
              hardware or software of the device, theft or malfunctioning
              including but not limited to those arising out of software and
              hardware of the device for the entire period the device is at the
              Service Partner’s location and it shall be presumed that the User
              is already aware of such risks that can exist in the Servicing
              Services by the SP.
            </p>
            <br />
            <br />
            <p>
              Upon acceptance of any Order or Task by the Logistics Partner, the
              pickup and delivery services undertaken by him/her, shall
              constitute a separate contract for services between ETark and
              Logistics Partner. ETark shall not be responsible for the services
              provided by Logistics Partner to the Buyers through the Platform.
              ETark may, however, offer support services to Logistics Partners
              in respect of Order fulfilment, payment collection, call centre
              support, and other ancillary services, pursuant to independent
              contracts executed by ETark with the Logistics Partners. ETark
              shall be absolved of any liability arising out of any defect,
              external or internal damage including but not limited to hardware
              or software of the device, theft or malfunctioning including but
              not limited to those arising out of software and hardware of the
              device for the entire period the device is at the Service
              Partner’s location and it shall be presumed that the User is
              already aware of such risks that can exist while transporting the
              device by the Logistics Partner.
            </p>
            <br />
            <br />
            <p>
              ETark does not make any representation or warranty as to the
              item-specifics (such as legal title, creditworthiness, identity,
              etc.) of any of the Service Partners. You are advised to
              independently verify the bona fides of any particular Service
              Partner that you choose to deal with on the Platform when you then
              receive the Proforma Invoice and Final Invoice copy from the SP
              via ETark and use your best judgment on that behalf. All Service
              Partner offers and third-party offers such as discounts on the
              Servicing services, waive off of inspection fee etc. are subject
              to respective SP Policies. ETark takes no responsibility for such
              offers.
            </p>
            <br />
            <br />
            <p>
              ETark neither makes any representation or warranty as to specifics
              (such as quality, value, salability, etc.) of the devices proposed
              to be serviced on the Platform. ETark accepts no liability for any
              errors or omissions, whether on behalf of itself or third parties.
              ETark does not make any representation or warranty with respect to
              any aspect of the services being provided by the Service Partners
              and Logistics Partners through the Platform including but not
              limited to pick up and delivery services and servicing services to
              the Buyers as the case may be. ETark is not responsible for any
              non-performance or breach of any contract entered into between
              Buyers and Service Partners, and between Buyers and Logistics
              Partners on the Platform. ETark cannot and does not guarantee that
              the concerned Buyers, SPs and Logistics Partners will perform any
              transaction concluded on the Platform. ETark is not responsible
              for unsatisfactory or non-performance of services or damages or
              delays as a result of device parts which are out of stock,
              unavailable or back ordered.
            </p>
            <br />
            <br />
            <p>
              ETark is operating an online marketplace and assumes the role of
              facilitator, and does not at any point of time during any
              transaction between Buyer and Logistics Partner and/or Buyer and
              SP on the Platform come into or take possession of any of the
              products or services offered by Logistics partner or SP. At no
              time shall ETark hold any right, title or interest over the
              products nor shall ETark have any obligations or liabilities in
              respect of such contract entered into between Buyer and Logistics
              Partner and/or Buyer and SP.
            </p>
            <br />
            <br />
            <p>
              ETark is only providing a platform for communication and it is
              agreed that the servicing of the Buyer’s device shall be a
              strictly bipartite contract between the Service Partner and the
              Buyer. In case of complaints from the Buyer pertaining to
              efficacy, quality, or any other such issues, ETark shall notify
              the same to Service Partner and shall also try to redirect the
              Buyer to the consumer call center of the Service Partner. The
              Service Partner shall be liable for redressing Buyer complaints.
              In the event you raise any complaint on any Service Partner
              allocated to you by our Platform, we shall assist you to the best
              of our abilities by providing relevant information to you, such as
              details of the Service Partner and the specific Order to which the
              complaint relates, to enable satisfactory resolution of the
              complaint.
            </p>
            <br />
            <br />
            <p>
              Similar to the above, ETark is only providing a platform for
              communication with Logistics Partner and does not provide any
              pick-up and delivery services with respect to the Orders placed by
              Service Partner/Buyers on the Platform as it is merely
              facilitating Delivery Services by connecting the Service
              Partner/Buyers with the Logistics Partner through the Platform. In
              case of complaints by the Service Partner/Buyers for deficiency or
              lapse in the delivery services provided by the Logistics Partner,
              ETark shall notify the same to the Logistics Partner and also
              assist Service Partner/Buyers to the best of its abilities to
              enable satisfactory resolution of the complaint.
            </p>
            <br />
            <br />
            <p>
              Apart from being an online platform for seamless integration of
              the User, Logistics Partner and Service Partner, ETark also hosts
              a online tool under its Complaint Analysis Services to evaluate
              the efficacy of the complaint registered in the Order by the User
              for his device that can help the User take decisions about the
              User’s approach in the Consumer Court or in a negotiation with the
              device manufacturer or seller (e commerce / offline retailer) from
              whom the device was bought.
            </p>
            <br />
            <br />
            <p>
              Please note that there could be risks in dealing with underage
              persons or people acting under false pretence.
            </p>
            <br />
            <br />
            <h1>ETark - Use of the Website</h1>
            <br />
            <p>
              You agree, undertake and confirm that your use of Platform shall
              be strictly governed by the following binding principles:
            </p>
            <br />
            <p>
              You shall not host, display, upload, download, modify, publish,
              transmit, update or share any information which:
            </p>
            <br />
            <p>
              belongs to another person and which you do not have any right to;
            </p>
            <br />
            <p>
              is grossly harmful, harassing, blasphemous, defamatory, obscene,
              pornographic, paedophilic, libellous, slanderous, criminally
              inciting or invasive of another's privacy, hateful, or racially,
              ethnically objectionable, disparaging, relating or encouraging
              money laundering or gambling, or otherwise unlawful in any manner
              whatsoever; or unlawfully threatening or unlawfully harassing
              including but not limited to "indecent representation of women"
              within the meaning of the Indecent Representation of Women
              (Prohibition) Act, 1986;
            </p>
            <br />
            <p>is misleading or misrepresentative in any way;</p>
            <br />
            <p>
              is patently offensive to the online community, such as sexually
              explicit content, or content that promotes obscenity, paedophilia,
              racism, bigotry, hatred or physical harm of any kind against any
              group or individual;
            </p>
            <br />
            <p>harasses or advocates harassment of another person;</p>
            <br />
            <p>
              involves the transmission of "junk mail", "chain letters", or
              unsolicited mass mailing or "spamming";
            </p>
            <br />
            <p>
              promotes illegal activities or conduct that is abusive,
              threatening, obscene, defamatory or libellous;
            </p>
            <br />
            <p>
              infringes upon or violates any third party's rights including, but
              not limited to, intellectual property rights, rights of privacy
              (including without limitation unauthorized disclosure of a
              person's name, email address, physical address or phone number) or
              rights of publicity;
            </p>
            <br />
            <p>
              promotes an illegal or unauthorized copy of another person's
              copyrighted work (see "copyright complaint" below for instructions
              on how to lodge a complaint about uploaded copyrighted material),
              such as providing pirated computer programs or links to them,
              providing information to circumvent manufacture-installed
              copy-protect devices, or providing pirated music or links to
              pirated music files;
            </p>
            <br />
            <p>
              contains restricted or password-only access pages, or hidden pages
              or images (those not linked to or from another accessible page);
            </p>
            <br />
            <p>
              provides material that exploits people in a sexual, violent or
              otherwise inappropriate manner or solicits personal information
              from anyone;
            </p>
            <br />
            <p>
              provides instructional information about illegal activities such
              as making or buying illegal weapons, violating someone's privacy,
              or providing or creating computer viruses;
            </p>
            <br />
            <p>
              contains video, photographs, or images of another person (with a
              minor or an adult);
            </p>
            <br />
            <p>
              tries to gain unauthorized access or exceeds the scope of
              authorized access to the Platform or to profiles, blogs,
              communities, account information, bulletins, friend request, or
              other areas of the Platform or solicits passwords or personal
              identifying information for commercial or unlawful purposes from
              other users;
            </p>
            <br />
            <p>
              engages in commercial activities and/or sales without our prior
              written consent such as contests, sweepstakes, barter, advertising
              and pyramid schemes, or the buying or selling of products related
              to the Platform. Throughout these Terms of Use, ETark's prior
              written consent means a communication coming from ETark's Legal
              Department, specifically in response to your request, and
              expressly addressing and allowing the activity or conduct for
              which you seek authorization;
            </p>
            <br />
            <p>
              solicits gambling or engages in any gambling activity which is or
              could be construed as being illegal;
            </p>
            <br />
            <p>
              interferes with another user's use and enjoyment of the Platform
              or any third party's user and enjoyment of similar services;
            </p>
            <br />
            <p>
              refers to any website or URL that, in our sole discretion,
              contains material that is inappropriate for the Platform or any
              other website, contains content that would be prohibited or
              violates the letter or spirit of these Terms of Use;
            </p>
            <br />
            <p>harm minors in any way;</p>
            <br />
            <p>
              infringes any patent, trademark, copyright or other intellectual
              property rights or third party's trade secrets or rights of
              publicity or privacy or shall not be fraudulent or involve the
              sale of counterfeit or stolen products;
            </p>
            <br />
            <p>violates any law for the time being in force;</p>
            <br />
            <p>
              deceives or misleads the addressee/users about the origin of such
              messages or communicates any information which is grossly
              offensive or menacing in nature;
            </p>
            <br />
            <p>impersonate another person;</p>
            <br />
            <p>
              contains software viruses or any other computer code, files or
              programs designed to interrupt, destroy or limit the functionality
              of any computer resource; or contains any trojan horses, worms,
              time bombs, cancelbots, easter eggs or other computer programming
              routines that may damage, detrimentally interfere with, diminish
              value of, surreptitiously intercept or expropriate any system,
              data or personal information; threatens the unity, integrity,
              defence, security or sovereignty of India, friendly relations with
              foreign states, or public order or causes incitement to the
              commission of any criminal offence or prevents investigation of
              any offence or is insulting any other nation;
            </p>
            <br />
            <br />
            <p>is false, inaccurate or misleading;</p>
            <br />
            <p>
              directly or indirectly, offers, attempts to offer, trades or
              attempts to trade in any item, the dealing of which is prohibited
              or restricted in any manner under the provisions of any applicable
              law, rule, regulation or guideline for the time being in force; or
              creates liability for us or causes us to lose (in whole or in
              part) the services of our internet service provider or other
              suppliers.
            </p>
            <br />
            <br />
            <p>
              You shall not use any "deep-link", "page-scrape", "robot",
              "spider" or other automatic device, program, algorithm or
              methodology, or any similar or equivalent manual process, to
              access, acquire, copy or monitor any portion of the Platform or
              any Content, or in any way reproduce or circumvent the
              navigational structure or presentation of the Platform or any
              Content, to obtain or attempt to obtain any materials, documents
              or information through any means not purposely made available
              through the Platform. We reserve our right to prohibit any such
              activity.
            </p>
            <br />
            <br />
            <p>
              You shall not attempt to gain unauthorized access to any portion
              or feature of the Platform, or any other systems or networks
              connected to the Platform or to any server, computer, network, or
              to any of the services offered on or through the Platform, by
              hacking, "password mining" or any other illegitimate means.
            </p>
            <br />
            <br />
            <p>
              You shall not probe, scan or test the vulnerability of the
              Platform or any network connected to the Platform nor breach the
              security or authentication measures on the Platform or any network
              connected to the Platform. You may not reverse look-up, trace or
              seek to trace any information on any other user of or visitor to
              Platform, or any other Buyer, including any account on the
              Platform not owned by you, to its source, or exploit the Platform
              or any service or information made available or offered by or
              through the Platform, in any way where the purpose is to reveal
              any information, including but not limited to personal
              identification or information, other than your own information, as
              provided for by the Platform.
            </p>
            <br />
            <br />
            <p>
              You shall not make any negative, denigrating or defamatory
              statement(s) or comment(s) about us or the brand name or domain
              name used by us including the name 'ETark', or otherwise engage in
              any conduct or action that might tarnish the image or reputation,
              of ETark or Service Partner on platform or otherwise tarnish or
              dilute any ETark's trade or service marks, trade name and/or
              goodwill associated with such trade or service marks, as may be
              owned or used by us. You agree that you will not take any action
              that imposes an unreasonable or disproportionately large load on
              the infrastructure of the Platform or ETark's systems or networks,
              or any systems or networks connected to ETark.
            </p>
            <br />
            <br />
            <p>
              You agree not to use any device, software or routine to interfere
              or attempt to interfere with the proper working of the Platform or
              any transaction being conducted on the Platform, or with any other
              person's use of the Platform.
            </p>
            <br />
            <br />
            <p>
              You may not forge headers or otherwise manipulate identifiers in
              order to disguise the origin of any message or transmittal you
              send to us on or through the Platform or any service offered on or
              through the Platform. You may not pretend that you are, or that
              you represent, someone else, or impersonate any other individual
              or entity.
            </p>
            <br />
            <br />
            <p>
              You may not use the Platform or any content on the Platform for
              any purpose that is unlawful or prohibited by these Terms of Use,
              or to solicit the performance of any illegal activity or other
              activity that infringes the rights of ETark and/or others.
            </p>
            <br />
            <br />
            <p>
              You shall at all times ensure full compliance with the applicable
              provisions, as amended from time to time, of (a) the Information
              Technology Act, 2000 and the rules thereunder; (b) all applicable
              domestic laws, rules and regulations (including the provisions of
              any applicable exchange control laws or regulations in force); and
              (c) international laws, foreign exchange laws, statutes,
              ordinances and regulations (including, but not limited to GST,
              income tax, local levies etc.) regarding your use of our services.
              You shall not engage in any transaction in an item or service,
              which is prohibited by the provisions of any applicable law
              including exchange control laws or regulations for the time being
              in force.
            </p>
            <br />
            <br />
            <p>
              In order to allow us to use the information supplied by you,
              without violating your rights or any laws, you agree to grant us a
              non-exclusive, worldwide, perpetual, irrevocable, royalty-free,
              sub-licensable (through multiple tiers) right to exercise the
              copyright, publicity, database rights or any other rights you have
              in your Information, in any media now known or not currently
              known, with respect to your Information. We will only use your
              information in accordance with these Terms of Use and Privacy
              Policy applicable to use of the Platform.
            </p>
            <br />
            <br />
            <p>
              You shall be responsible for providing the correct device to be
              serviced by the Service Partner. In this connection, you undertake
              that all the information you provide on our platform while filling
              in the device details shall be accurate in all respects. You shall
              not exaggerate or overemphasize the attributes of your device so
              as to mislead other users in any manner.
            </p>
            <br />
            <br />
            <p>
              You may not transmit any chain letters or unsolicited commercial
              or junk email to other users via the Platform. It shall be a
              violation of these Terms of Use to use any information obtained
              from the Platform in order to harass, abuse, or harm another
              person, or in order to contact, advertise to, solicit, or sell to
              another person other than us without our prior explicit consent.
              In order to protect our users from such advertising or
              solicitation, we reserve the right to restrict the number of
              messages or emails which a user may send to other users in any
              24-hour period which we deem appropriate in its sole discretion.
              You understand that we have the right at all times to disclose any
              information (including the identity of the persons providing
              information or materials on the Platform) as necessary to satisfy
              any law, regulation or valid governmental request. This may
              include, without limitation, disclosure of the information in
              connection with investigation of alleged illegal activity or
              solicitation of illegal activity or in response to a lawful court
              order or subpoena. In addition, We can (and you hereby expressly
              authorize us to) disclose any information about you to law
              enforcement or other government officials, as we, in our sole
              discretion, believe necessary or appropriate in connection with
              the investigation and/or resolution of possible crimes, especially
              those that may involve personal injury.
            </p>
            <br />
            <br />
            <p>
              We reserve the right, but has no obligation, to monitor the
              materials posted on the Platform. ETark shall have the right to
              remove or edit any content that in its sole discretion violates,
              or is alleged to violate, any applicable law or either the spirit
              or letter of these Terms of Use. Notwithstanding this right, YOU
              REMAIN SOLELY RESPONSIBLE FOR THE CONTENT OF THE MATERIALS YOU
              POST ON THE PLATFORM AND IN YOUR PRIVATE MESSAGES. Please be
              advised that such Content posted does not necessarily reflect
              ETark views. In no event shall ETark assume or have any
              responsibility or liability for any Content posted or for any
              claims, damages or losses resulting from use of Content and/or
              appearance of Content on the Platform. You hereby represent and
              warrant that you have all necessary rights in and to all Content
              which you provide and all information it contains and that such
              Content shall not infringe any proprietary or other rights of
              third parties or contain any libellous, tortious, or otherwise
              unlawful information.
            </p>
            <br />
            <br />
            <p>
              Your correspondence or business dealings with, or participation in
              promotions of, advertisers found on or through the Platform,
              including payment for the services, and any other terms,
              conditions, warranties or representations associated with such
              dealings, are solely between you and such advertiser. We shall not
              be responsible or liable for any loss or damage of any sort
              incurred as the result of any such dealings or as the result of
              the presence of such advertisers on the Platform.
            </p>
            <br />
            <br />
            <p>
              It is possible that other users (including unauthorized users or
              'hackers') may post or transmit offensive or obscene materials on
              the Platform and that you may be involuntarily exposed to such
              offensive and obscene materials. It also is possible for others to
              obtain personal information about you due to your use of the
              Platform, and that the recipient may use such information to
              harass or injure you. We do not approve of such unauthorized uses,
              but by using the Platform You acknowledge and agree that we are
              not responsible for the use of any personal information that you
              publicly disclose or share with others on the Platform. Please
              carefully select the type of information that you publicly
              disclose or share with others on the Platform.
            </p>
            <br />
            <br />
            <p>
              ETark shall have all the rights to take necessary action and claim
              damages that may occur due to your involvement/participation in
              any way on your own or through group/s of people, intentionally or
              unintentionally in DoS/DDoS (Distributed Denial of Services),
              hacking, pen testing attempts without our prior consent or a
              mutual legal agreement.
            </p>
            <br />
            <br />
            <h2>Account Registration</h2>
            <br />
            <p>
              You may access the Platform by registering to create an account ("
              ETark Account") and become a member (" Membership"); or (c) you
              can also register to join by logging into your account with
              certain third party social networking sites ("SNS") (including,
              but not limited to, Facebook); each such account, a " Third Party
              Account", via our Platform, as described below. The Membership is
              limited for the purpose and are subject to the terms, and strictly
              not transferable. As part of the functionality of the Platform
              services, you may link your ETark Account with Third Party
              Accounts, by either:
            </p>
            <br />
            <br />
            <p>
              providing your Third Party Account login information to us through
              the Platform; or
            </p>
            <br />
            <br />
            <p>
              allowing us to access your Third Party Account, as is permitted
              under the applicable terms and conditions that govern your use of
              each Third Party Account.
            </p>
            <br />
            <br />
            <p>
              You represent that you are entitled to disclose your Third Party
              Account login information to us and/or grant us access to your
              Third Party Account (including, but not limited to, for use for
              the purposes described herein), without breach by you of any of
              the terms and conditions that govern your use of the applicable
              Third Party Account and without obligating us to pay any fees or
              making us subject to any usage limitations imposed by such third
              party service providers.
            </p>
            <br />
            <br />
            <p>
              By granting us access to any Third Party Accounts, you understand
              that we will access, make available and store (if applicable) any
              content or information that you have provided to and stored in
              your Third Party Account (" SNS Content") so that it is available
              on and through the Platform via your ETark Account.
            </p>
            <br />
            <br />
            <p>
              Unless otherwise specified in these Terms of Use, all SNS Content,
              if any, will be considered to be your content for all purposes of
              these Terms of Use.
            </p>
            <br />
            <br />
            <p>
              Depending on the Third Party Accounts, you choose, and subject to
              the privacy settings that you have set in such Third Party
              Accounts, personally identifiable information that you post to
              your Third Party Accounts will be available on and through your
              ETark Account on the Platform. Please note that if a Third Party
              Account or associated service becomes unavailable or our access to
              such Third Party Account is terminated by the third party service
              provider, then SNS Content will no longer be available on and
              through the Platform.
            </p>
            <br />
            <br />
            <p>
              We will create your ETark Account for your use of the Platform
              services based upon the personal information you provide to us or
              that we obtain via SNS, as described above. You can only have one
              ETark Account and are not permitted to create multiple accounts.
              ETark reserves the right to suspend such multiple accounts without
              being liable for any compensation where you have created multiple
              accounts on the Platform.
            </p>
            <br />
            <br />
            <p>
              You agree to provide accurate, current and complete information
              during the registration process and update such information to
              keep it accurate, current and complete.
            </p>
            <br />
            <br />
            <p>
              We reserve the right to suspend or terminate your ETark Account
              and your access to the Services (i) if any information provided
              during the registration process or thereafter proves to be
              inaccurate, not current or incomplete; (ii) if it is believed that
              your actions may cause legal liability for you, other users or us;
              and/or (iii) if you are found to be non-compliant with the Terms
              of Use or other ETark policies. You are responsible for
              safeguarding your password. You agree that you will not disclose
              your password to any third party and that you will take sole
              responsibility for any activities or actions under your ETark
              Account, whether or not you have authorized such activities or
              actions. You will immediately notify us of any unauthorized use of
              your ETark Account.
            </p>
            <br />
            <br />
            <p>
              Goods and services purchased from the Platform are intended for
              your personal use and you represent that the same are not for
              resale or you are not acting as an agent for other parties.
            </p>
            <br />
            <br />
            <h1>
              Order Registration for the Servicing Services and Financial Terms
            </h1>
            <br />
            <p>
              The Platform allows the Buyers to place Orders and upon acceptance
              of such Orders by the Service Partner, ETark will, subject to the
              terms and conditions set out herein, facilitate servicing of the
              Buyer’s device through the Service Partner post pickup and
              delivery by the Logistics Partner for the to and fro trip between
              the Buyer’s Location as registered by the Buyer in the platform
              while placing an Order and the SP’s location. ETark does not own,
              sell, resell on its own such products offered by the Service
              Partner, and/or does not control the Service Partner or the
              related services provided in connection thereof. Buyer understands
              that any Order that he/she places shall be subject to the terms
              and conditions set out in these Terms of Use including, but not
              limited to, part availability, delivery location serviceability,
              and acceptance of Orders by Logistics Partner/SP.
            </p>
            <br />
            <br />
            <p>
              As a general rule, all Orders placed on the Platform and Delivery
              Services are treated as confirmed.
            </p>
            <br />
            <br />
            <p>
              However, upon Buyer’s successful completion of booking an Order
              for the Pickup and Delivery Service, we may call the Buyer on the
              telephone or mobile number provided to confirm the details of such
              Order, price to be paid and the estimated delivery time. For this
              purpose, we shall be using certain information provided by the
              Buyer at the time of getting membership at the Platform, including
              but not limited to Buyer’s (i) full name (ii) mobile number; and
              (iii) email address. It shall be Buyer’s sole responsibility to
              bring any incorrect details to our attention. In addition to the
              foregoing, we may also contact you by phone and / or email to
              inform and confirm any change in the Order, due to availability or
              unavailability or change in Order or change in price of any item
              in the Order as informed by the Merchant. Please note that any
              change or confirmation of the Order shall be treated as final. It
              is clarified that ETark reserves the right to not to process
              Buyer's Order in the event Buyer or Service Partner or Logistics
              Partner is unavailable on the phone or any other means of
              communication at the time when we call you for confirming the
              Order and such event the provisions of the Refund and Cancellation
              Policy shall be applicable.
            </p>
            <br />
            <br />
            <p>
              For orders which pertain to your device complaint’s analysis (as
              governed under the “Complaint Analysis Services”, also referred to
              as Report, ETark shall generate an instant report which contains
              an analysis of the User’s complaint from the perspective of future
              prognostication of the fate of the complaint in District, State or
              National Consumer Forum of India. This analysis report is a
              patented property of ETark’s founder and Director Mr. Rahul Kumar
              Mandal who enjoys absolute and exclusive rights over the patent
              and ETark is using this patented technology to deliver this report
              through it’s Platform to the User.
            </p>
            <br />
            <br />
            <p>
              This report is one of the first such products in the world and its
              potential application includes identifying the efficacy of the
              argument of the User’s complaint pertaining to his/ her device as
              registered in the Order. The output of the Report is based on the
              data registered by the User on the platform while registering his
              order and hence the results of the report may be erroneous in case
              of data misrepresentation including but not limited to changing
              the nature of the complaint, intentional or unintentional
              falsification of the complaint, warranty status of the device,
              wrong or illegible pictures upload of the front and backside of
              the phone, wrong IMEI No. etc
            </p>
            <br />
            <br />
            <p>
              All payments made against the Orders or Services on the Platform
              by you shall be compulsorily in Indian Rupees acceptable in the
              Republic of India. The Platform will not facilitate transactions
              with respect to any other form of currency with respect to the
              Orders or Services made on Platform. You can pay by (i) credit
              card or debit card or net banking; (ii) any other RBI approved
              payment method at the time of booking an Order; or (iii) credit or
              debit card or cash at the time of delivery. You understand, accept
              and agree that the payment facility provided by ETark is neither a
              banking nor financial service but is merely a facilitator
              providing an electronic, automated online electronic payment,
              receiving payment on delivery, collection and remittance facility
              for the transactions on the Platform using the existing authorized
              banking infrastructure and credit card payment gateway networks.
              Further, by providing payment facility, ETark is neither acting as
              trustees nor acting in a fiduciary capacity with respect to the
              transaction or the transaction price.
            </p>
            <br />
            <br />
            <p>
              Buyers acknowledge and agree that ETark acts as the Service
              Partner’s and Logistics Partner’s payment agent for the limited
              purpose of accepting payments from Buyers on behalf of the Service
              Partner or Logistics Partner, as the case may be. Upon your
              payment of amounts to us, which are due to the Service Partner or
              Logistics Partner, your payment obligation to the Service Partner
              or Logistics Partner for such amounts is completed. You shall not,
              under any circumstances whatsoever, make any payment directly to
              the Service Partner for Servicing Services or to the Logistics
              Partner for delivery of the Order made using the Platform.
            </p>
            <br />
            <br />
            <p>
              For orders involving the Pickup and Delivery Service, Buyer agrees
              to pay for the Logistics Partner fee covered under the Pickup and
              Delivery service along with our Monitoring Service fee and an
              Inspection Charge deposit amount upfront from the Buyer for the
              Order placed on the Platform under such plan of service. However,
              after inspection of the device at the Service Center by the SP,
              the SP may declare the device of the User to be a Non-warranty or
              Out of warranty case on our Platform in which case the Service
              Partner may send a Service Fee Estimate through our Platform for
              the Servicing work to be done on its end along with a bill in the
              form of a Proforma Invoice which the Buyer could either pay or
              decline. In the event, the Buyer chooses to decline the payment or
              the online link for making the payment becomes more than 24 hours
              old in which case the payment link will expire, the SP may claim
              for Inspection fee for the initial inspection by the technicians
              at its end and the same amount would be settled using the
              Inspection Fee amount collected by ETark from the Buyer at the
              beginning. In the event, the SP declines claiming the Inspection
              fee, the Inspection Fee deposit would be credited back to the
              User’s account. In case the User makes payment to the SP, the
              inspection fee deposit would be credited back to the User’s bank
              account. ETark will collect the total amount in accordance with
              these Terms of Use. Please note that we cannot control any amount
              that may be charged to Buyer by his/her bank related to our
              collection of the total amount, and we disclaim all liability in
              this regard. Post successful completion of the work, a final
              invoice bill would be shared with the User and any difference in
              amount between the Final Invoice and the Proforma Invoice shall be
              settled appropriately.
            </p>
            <br />
            <br />
            <p>
              In connection with Buyer’s Order, he/she will be asked to provide
              customary billing information such as name, billing address and
              credit card information either to us or our third party payment
              processor. Buyer agrees to pay us for the Order placed by you on
              the Platform, in accordance with these Terms, using the methods
              above. Buyer hereby authorizes the collection of such amounts by
              charging the credit card provided as part of requesting the
              booking, either directly by us or indirectly, via a third party
              online payment processor or by one of the payment methods
              described on the Platform. If Buyer is directed to our third-party
              payment processor, he/she may be subject to terms and conditions
              governing use of that third party's service and that third party's
              personal information collection practices. Please review such
              terms and conditions and privacy policy before using the Platform
              services. Once the Order is confirmed you will receive a
              confirmation email summarizing the confirmed booking. The Proforma
              Invoice bill (including taxes) containing the estimation of the
              Servicing Services and the final Invoice bill (including taxes)
              will be issued by the Service Partner to the User through our
              Platform. ETark is merely facilitating the payment on behalf of
              such SP and the payment done on the Proforma Invoice bill shall be
              credited directly to the SP’s bank account. For the Servicing
              Services, all applicable taxes and levies, the rates thereof and
              the manner of applicability of such taxes on the bill are being
              charged and determined by the SP. ETark holds no responsibility
              for the legal correctness/validity of the levy of such taxes. The
              sole responsibility for any legal issue arising on the taxes shall
              reside with the SP and the Logistics Partner.
            </p>
            <br />
            <br />
            <p>
              The components Monitoring Fee and Complaint Report in the Summary
              Prices table reflected on the Platform, are determined solely by
              ETark, while the Inspection Charge is determined by the value set
              by the Device Manufacturer and the Delivery charges is determined
              by the value set by the Logistics Partner.
            </p>
            <br />
            <br />
            <p>
              Disclaimer: Prices on any services(s) as reflected on the Platform
              may due to some technical issue, typographical error or product
              information supplied by Logistics Partner be incorrectly
              reflected.
            </p>
            <br />
            <br />
            <p>
              The SP shall be solely responsible for the warranty consideration
              status of the device sent by the Buyer and in no event shall be
              the responsibility of ETark.
            </p>
            <br />
            <br />
            <p>
              The transactions are bilateral between the SP and Buyer, and
              between Buyer and Logistics Partner, therefore, ETark is not
              liable to charge or deposit any taxes applicable on such
              transactions.
            </p>
            <br />
            <br />
            <h2>Cancellations and Refunds</h2>
            <br />
            <p>
              Please refer to the Refund and Cancellation Policy for
              cancellation and refunds terms in relation to usage of the
              Platform for availing Services.
            </p>
            <br />
            <br />
            <h2>Terms of service</h2>
            <br />
            <p>
              The Buyer agrees and acknowledges that ETark shall not be
              responsible for:
            </p>
            <br />
            <p>
              The services provided by the Service Partner including but not
              limited to device part(s) replacement as required by the problems
              in your device; The Service Partner’s services or goods, or
              services provided by Logistics Partner not being up to Buyer
              expectations or leading to any loss, harm or damage to him/her;
            </p>
            <br />
            <br />
            <p>
              The availability or unavailability of certain device part(s) at
              the SP’s center;
            </p>
            <br />
            <br />
            <p>The SP serving the incorrect Orders; or</p>
            <br />
            <br />
            <p>Product liability of devices serviced by Merchants.</p>
            <br />
            <br />
            <p>
              ETark shall not be responsible for any change or cancellation or
              unavailability of any order allocated to any specific service
              center. Buyers and SP agree and acknowledge that ETark is not
              responsible for any liability arising out of delivery services
              provided by Logistics Partner to them.
            </p>
            <br />
            <br />
            <p>
              Buyers may not be able to avail Services if their delivery
              location is outside ETark’s current scope of Service. ETark will
              keep the Buyer informed of the same at the time of confirming
              his/her Order booking.
            </p>
            <br />
            <br />
            <p>
              Buyer understands that delivery time quoted at the time of
              confirming the Order is an approximate estimate and may vary based
              on the information obtained from Logistics Partner and SP. ETark
              will not be responsible for any delay in the delivery of an Order.
              Buyer understands that there are certain Service Partners who
              undertake delivery of their goods and services to the Buyer and
              the SP may charge the Buyer for such service. ETark exercises no
              control on such delivery services and same shall be under the
              control of SP alone and hence all or any disputes arising out of
              such delivery services shall be between Buyer and SP alone. ETark
              shall not be responsible for such delivery services and assumes no
              liability for disputes arising out of the same.
            </p>
            <br />
            <br />
            <p>Services provided:</p>
            <br />
            <br />
            <p>
              You agree and acknowledge that ETark shall be liable in the event
              you have failed to adhere to the Terms of Use. Buyer shall be
              required to provide credit or debit card details to the approved
              payment gateways while making the payment on the Platform. In this
              regard, Buyer agrees to provide correct and accurate credit/ debit
              card details to the approved payment gateways for availing the
              Services. Buyer shall not use the credit/ debit card which is not
              lawfully owned by Buyer, i.e. in any transaction, Buyer must use
              his/her own credit/ debit card. The information provided by the
              Buyer will not be utilized or shared with any third party unless
              required in relation to fraud verifications or by law, regulation
              or court order. Buyer shall be solely responsible for the security
              and confidentiality of his/her credit/ debit card details. We
              expressly disclaim all liabilities that may arise as a consequence
              of any unauthorized use of your credit/ debit card.
            </p>
            <br />
            <br />
            <p>
              We constantly strive to provide you with accurate information on
              the Platform. However, in the event of an error, we may, in our
              sole discretion, contact you with further instructions.
            </p>
            <br />
            <br />
            <p>If you use the Platform, you do the same at your own risk.</p>
            <br />
            <br />
            <p>
              Buyer agrees that the Services shall be provided through the
              Platform only during the working hours of the relevant SP and
              Logistics Partners.
            </p>
            <br />
            <br />
            <p>No Endorsement</p>
            <br />
            <br />
            <p>
              We do not endorse any Service Partner or Logistics Partner. In
              addition, although these Terms of Use require you to provide
              accurate information, we do not attempt to confirm, and do not
              confirm if it is purported identity. We will not be responsible
              for any damage or harm resulting from your interactions with other
              Members.
            </p>
            <br />
            <br />
            <p>
              By using the Services, you agree that any legal remedy or
              liability that you seek to obtain for actions or omissions of
              other Members or other third parties will be limited to a claim
              against the particular Members or other third parties who caused
              you harm and you agree not to attempt to impose liability on, or
              seek any legal remedy from us with respect to such actions or
              omissions.
            </p>
            <br />
            <br />
            <p>General:</p>
            <br />
            <br />
            <p>
              Persons who are "incompetent to contract" within the meaning of
              the Indian Contract Act, 1872 including minors, un-discharged
              insolvents etc. are not eligible to use the Platform. Only
              individuals who are 18 years of age or older may use the Platform
              and avail Services. If you are under 18 years of age and you wish
              to download, install, access or use the Platform, your parents or
              legal guardian must acknowledge and agree to the Terms of Use and
              Privacy Policy. Should your parents or legal guardian fail to
              agree or acknowledge the Terms of Use and ETark policies, you
              shall immediately discontinue its use. ETark reserves the right to
              terminate your Membership and / or deny access to the platform if
              it is brought to ETark's notice that you are under the age of 18
              years.
            </p>
            <br />
            <br />
            <p>
              If you choose to use the Platform, it shall be your responsibility
              to treat your user identification code, password and any other
              piece of information that we may provide, as part of our security
              procedures, as confidential and not disclose the same to any
              person or entity other than us. We shall at times and at our sole
              discretion reserve the right to disable any user identification
              code or password if you have failed to comply with any of the
              provisions of these Terms of Use.
            </p>
            <br />
            <br />
            <p>
              As we are providing services in the select cities in India, we
              have complied with applicable laws of India in making the Platform
              and its content available to you. In the event the Platform is
              accessed from outside India or outside our delivery zones, it
              shall be entirely at your risk. We make no representation that the
              Platform and its contents are available or otherwise suitable for
              use outside select cities. If you choose to access or use the
              Platform from or in locations outside select cities, you do so on
              your own and shall be responsible for the consequences and
              ensuring compliance of applicable laws, regulations, byelaws,
              licenses, registrations, permits, authorisations, rules and
              guidelines.
            </p>
            <br />
            <br />
            <p>
              You shall at all times be responsible for the use of the Services
              through your computer or mobile device and for bringing these
              Terms of Use and ETark policies to the attention of all such
              persons accessing the Platform on your computer or mobile device.
            </p>
            <br />
            <br />
            <p>
              You understand and agree that the use of the Services does not
              include the provision of a computer or mobile device or other
              necessary equipment to access it. You also understand and
              acknowledge that the use of the Platform requires internet
              connectivity and telecommunication links. You shall bear the costs
              incurred to access and use the Platform and avail the Services,
              and we shall not, under any circumstances whatsoever, be
              responsible or liable for such costs.
            </p>
            <br />
            <br />
            <p>
              You agree and grant permission to ETark to receive promotional SMS
              and e-mails from ETark or allied partners. In case you wish to opt
              out of receiving promotional SMS or email please send a mail to
              support@etark.in.
            </p>
            <br />
            <br />
            <p>By using the Platform you represent and warrant that:</p>
            <br />
            <br />
            <p>
              All registration information you submit is truthful, lawful and
              accurate and that you agree to maintain the accuracy of such
              information. Your use of the Platform shall be solely for your
              personal use and you shall not authorize others to use your
              account, including your profile or email address and that you are
              solely responsible for all content published or displayed through
              your account, including any email messages, and your interactions
              with other users and you shall abide by all applicable local,
              state, national and foreign laws, treaties and regulations,
              including those related to data privacy, international
              communications and the transmission of technical or personal data.
            </p>
            <br />
            <br />
            <p>
              You will not submit, post, upload, distribute, or otherwise make
              available or transmit any content that: (a) is defamatory,
              abusive, harassing, insulting, threatening, or that could be
              deemed to be stalking or constitute an invasion of a right of
              privacy of another person; (b) is bigoted, hateful, or racially or
              otherwise offensive; (c) is violent, vulgar, obscene, pornographic
              or otherwise sexually explicit; (d) is illegal or encourages or
              advocates illegal activity or the discussion of illegal activities
              with the intent to commit them.
            </p>
            <br />
            <br />
            <p>
              All necessary licenses, consents, permissions and rights are owned
              by you and there is no need for any payment or permission or
              authorization required from any other party or entity to use,
              distribute or otherwise exploit in all manners permitted by these
              Terms of Use and Privacy Policy, all trademarks, copyrights,
              patents, trade secrets, privacy and publicity rights and / or
              other proprietary rights contained in any content that you submit,
              post, upload, distribute or otherwise transmit or make available.
            </p>
            <br />
            <br />
            <p>
              You will not (a) use any services provided by the Platform for
              commercial purposes of any kind, or (b) advertise or sell any
              products, services or otherwise (whether or not for profit), or
              solicit others (including, without limitation, solicitations for
              contributions or donations) or use any public forum for commercial
              purposes of any kind. In the event you want to advertise your
              product or service contact support@etark.in.
            </p>
            <br />
            <br />
            <p>
              You will not use the Platform in any way that is unlawful, or
              harms us or any other person or entity, as determined in our sole
              discretion.
            </p>
            <br />
            <br />
            <p>
              You will not post, submit, upload, distribute, or otherwise
              transmit or make available any software or other computer files
              that contain a virus or other harmful component, or otherwise
              impair or damage the Platform or any connected network, or
              otherwise interfere with any person or entity's use or enjoyment
              of the Platform.
            </p>
            <br />
            <br />
            <p>
              You will not use another person's username, password or other
              account information, or another person's name, likeness, voice,
              image or photograph or impersonate any person or entity or
              misrepresent your identity or affiliation with any person or
              entity.
            </p>
            <br />
            <br />
            <p>
              You will not engage in any form of antisocial, disrupting, or
              destructive acts, including "flaming," "spamming," "flooding,"
              "trolling," and "griefing" as those terms are commonly understood
              and used on the Internet.
            </p>
            <br />
            <br />
            <p>
              You will not delete or modify any content of the Platform,
              including but not limited to, legal notices, disclaimers or
              proprietary notices such as copyright or trademark symbols, logos,
              that you do not own or have express permission to modify.
            </p>
            <br />
            <br />
            <p>
              You will not post or contribute any information or data that may
              be obscene, indecent, pornographic, vulgar, profane, racist,
              sexist, discriminatory, offensive, derogatory, harmful, harassing,
              threatening, embarrassing, malicious, abusive, hateful, menacing,
              defamatory, untrue or political or contrary to our interest.
            </p>
            <br />
            <br />
            <p>
              You shall not access the Platform without authority or use the
              Platform in a manner that damages, interferes or disrupts: any
              part of the Platform or the Platform software; or
            </p>
            <br />
            <br />
            <p>
              any equipment or any network on which the Platform is stored or
              any equipment of any third party
            </p>
            <br />
            <br />
            <p>
              You release and fully indemnify ETark and/or any of its officers
              and representatives from any cost, damage, liability or other
              consequence of any of the actions of the Users of the Platform and
              specifically waive any claims that you may have in this behalf
              under any applicable laws of India. Notwithstanding its reasonable
              efforts on that behalf, ETark cannot take responsibility or
              control the information provided by other Users which is made
              available on the Platform. You may find other User's information
              to be offensive, harmful, inconsistent, inaccurate, or deceptive.
              Please use caution and practice safe trading when using the
              Platform.
            </p>
            <br />
            <br />
            <p>Access to the Platform, Accuracy and security</p>
            <br />
            <br />
            <p>
              We endeavour to make the Services available during Service Partner
              or Logistics Partner working hours. However, we do not represent
              that access to the Platform will be uninterrupted, timely, error
              free, free of viruses or other harmful components or that such
              defects will be corrected.
            </p>
            <br />
            <br />
            <p>
              We do not warrant that the Platform will be compatible with all
              hardware and software which you may use. We shall not be liable
              for damage to, or viruses or other code that may affect, any
              equipment (including but not limited to your mobile device),
              software, data or other property as a result of your download,
              installation, access to or use of the Platform or your obtaining
              any material from, or as a result of using, the Platform. We shall
              also not be liable for the actions of third parties.
            </p>
            <br />
            <br />
            <p>
              We do not represent or warranty that the information available on
              the Platform will be correct, accurate or otherwise reliable.
            </p>
            <br />
            <br />
            <p>
              We reserve the right to suspend or withdraw access to the Platform
              to you personally, or to all users temporarily or permanently at
              any time without notice. We may any time at our sole discretion
              reinstate suspended users. A suspended User may not register or
              attempt to register with us or use the Platform in any manner
              whatsoever until such time that such user is reinstated by us.
            </p>
            <br />
            <br />
            <p>
              Relationship with operators if the Platform is accessed on mobile
              devices
            </p>
            <br />
            <br />
            <p>
              In the event the Platform is accessed on a mobile device, it is
              not associated, affiliated, sponsored, endorsed or in any way
              linked to any platform operator, including, without limitation,
              Apple, Google, Android or RIM Blackberry (each being an "
              Operator").
            </p>
            <br />
            <br />
            <p>
              Your download, installation, access to or use of the Platform is
              also bound by the terms and conditions of the Operator.
            </p>
            <br />
            <br />
            <p>
              You and we acknowledge that these Terms of Use are concluded
              between you and ETark only, and not with an Operator, and we, not
              those Operators, are solely responsible for the Platform and the
              content thereof to the extent specified in these Terms of Use.
            </p>
            <br />
            <br />
            <p>
              The license granted to you for the Platform is limited to a
              non-transferable license to use the Platform on a mobile device
              that you own or control and as permitted by these Terms of Use.
            </p>
            <br />
            <br />
            <p>
              We are solely responsible for providing any maintenance and
              support services with respect to the Platform as required under
              applicable law. You and we acknowledge that an Operator has no
              obligation whatsoever to furnish any maintenance and support
              services with respect to the Platform.
            </p>
            <br />
            <br />
            <p>
              You and we acknowledge that we, not the relevant Operator, are
              responsible for addressing any claims of you or any third party
              relating to the Platform or your possession and/or use of the
              Platform, including, but not limited to: (i) any claim that the
              Platform fails to conform to any applicable legal or regulatory
              requirement; and (ii) claims arising under consumer protection or
              similar legislation.
            </p>
            <br />
            <br />
            <p>
              You and we acknowledge that, in the event of any third party claim
              that the Platform or your possession and use of the Platform
              infringes that third party's intellectual property rights, we, not
              the relevant Operator, will be solely responsible for the
              investigation, defence, settlement and discharge of any such
              intellectual property infringement claim.
            </p>
            <br />
            <br />
            <p>
              You must comply with any applicable third party terms of agreement
              when using the Platform (e.g. you must ensure that your use of the
              Platform is not in violation of your mobile device agreement or
              any wireless data service agreement).
            </p>
            <br />
            <br />
            <p>
              You and we acknowledge and agree that the relevant Operator, and
              that Operator's subsidiaries, are third party beneficiaries of
              these Terms of Use, and that, upon your acceptance of these Terms
              of Use, that Operator will have the right (and will be deemed to
              have accepted the right) to enforce these Terms of Use against you
              as a third party beneficiary thereof.
            </p>
            <br />
            <br />
            <p>
              <h2>Disclaimers</h2>
              THE PLATFORM MAY BE UNDER CONSTANT UPGRADES, AND SOME FUNCTIONS
              AND FEATURES MAY NOT BE FULLY OPERATIONAL.
            </p>
            <br />
            <p>
              DUE TO THE VAGARIES THAT CAN OCCUR IN THE ELECTRONIC DISTRIBUTION
              OF INFORMATION AND DUE TO THE LIMITATIONS INHERENT IN PROVIDING
              INFORMATION OBTAINED FROM MULTIPLE SOURCES, THERE MAY BE DELAYS,
              OMISSIONS, OR INACCURACIES IN THE CONTENT PROVIDED ON THE PLATFORM
              OR DELAY OR ERRORS IN FUNCTIONALITY OF THE PLATFORM. AS A RESULT,
              WE DO NOT REPRESENT THAT THE INFORMATION POSTED IS CORRECT IN
              EVERY CASE.
            </p>
            <br />
            <p>
              WE EXPRESSLY DISCLAIM ALL LIABILITIES THAT MAY ARISE AS A
              CONSEQUENCE OF ANY UNAUTHORIZED USE OF CREDIT/ DEBIT CARDS.
            </p>
            <br />
            <p>
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
              WITH RESPECT TO THIRD PARTY'S / MERCHANT’S/ PDP’S SERVICES.
            </p>
            <br />
            <p>
              ETark DISCLAIMS AND ALL LIABILITY THAT MAY ARISE DUE TO ANY
              VIOLATION OF ANY APPLICABLE LAWS INCLUDING THE LAW APPLICABLE TO
              PRODUCTS AND SERVICES OFFERED BY THE MERCHANT OR PDP.
            </p>
            <br />
            <p>
              WHILE THE MATERIALS PROVIDED ON THE PLATFORM WERE PREPARED TO
              PROVIDE ACCURATE INFORMATION REGARDING THE SUBJECT DISCUSSED, THE
              INFORMATION CONTAINED IN THESE MATERIALS IS BEING MADE AVAILABLE
              WITH THE UNDERSTANDING THAT WE MAKE NO GUARANTEES, REPRESENTATIONS
              OR WARRANTIES WHATSOEVER, WHETHER EXPRESSED OR IMPLIED, WITH
              RESPECT TO PROFESSIONAL QUALIFICATIONS, EXPERTISE, QUALITY OF WORK
              OR OTHER INFORMATION HEREIN. FURTHER, WE DO NOT, IN ANY WAY,
              ENDORSE ANY SERVICE OFFERED OR DESCRIBED HEREIN. IN NO EVENT SHALL
              WE BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DECISION MADE OR
              ACTION TAKEN IN RELIANCE ON SUCH INFORMATION.
            </p>
            <br />
            <p>
              THE INFORMATION PROVIDED HEREUNDER IS PROVIDED "AS IS". WE AND /
              OR OUR EMPLOYEES MAKE NO WARRANTY OR REPRESENTATION REGARDING THE
              TIMELINESS, CONTENT, SEQUENCE, ACCURACY, EFFECTIVENESS OR
              COMPLETENESS OF ANY INFORMATION OR DATA FURNISHED HEREUNDER OR
              THAT THE INFORMATION OR DATA PROVIDED HEREUNDER MAY BE RELIED
              UPON. MULTIPLE RESPONSES MAY USUALLY BE MADE AVAILABLE FROM
              DIFFERENT SOURCES AND IT IS LEFT TO THE JUDGEMENT OF USERS BASED
              ON THEIR SPECIFIC CIRCUMSTANCES TO USE, ADAPT, MODIFY OR ALTER
              SUGGESTIONS OR USE THEM IN CONJUNCTION WITH ANY OTHER SOURCES THEY
              MAY HAVE, THEREBY ABSOLVING US AS WELL AS OUR CONSULTANTS,
              BUSINESS ASSOCIATES, AFFILIATES, BUSINESS PARTNERS AND EMPLOYEES
              FROM ANY KIND OF PROFESSIONAL LIABILITY.
            </p>
            <br />
            <p>
              WE SHALL NOT BE LIABLE TO YOU OR ANYONE ELSE FOR ANY LOSSES OR
              INJURY ARISING OUT OF OR RELATING TO THE INFORMATION PROVIDED ON
              THE PLATFORM. IN NO EVENT WILL WE OR OUR EMPLOYEES, AFFILIATES,
              AUTHORS OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY
              DECISION MADE OR ACTION TAKEN BY YOUR RELIANCE ON THE CONTENT
              CONTAINED HEREIN.
            </p>
            <br />
            <p>
              IN NO EVENT WILL WE BE LIABLE FOR ANY DAMAGES (INCLUDING, WITHOUT
              LIMITATION, DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL
              OR EXEMPLARY DAMAGES, DAMAGES ARISING FROM PERSONAL
              INJURY/WRONGFUL DEATH, AND DAMAGES RESULTING FROM LOST PROFITS,
              LOST DATA OR BUSINESS INTERRUPTION), RESULTING FROM ANY SERVICES
              PROVIDED BY ANY THIRD PARTY OR MERCHANT ACCESSED THROUGH THE
              PLATFORM, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER
              LEGAL THEORY AND WHETHER OR NOT WE ARE ADVISED OF THE POSSIBILITY
              OF SUCH DAMAGES.
            </p>
            <br />
            <p>Intellectual property</p>
            <br />
            <p>
              Please refer to the Intellectual Property Policy at
              http://www.etark.in/intellectual_property
            </p>
            <br />
            <p>Treatment of information provided by you</p>
            <br />
            <p>
              We process information provided by you to us in accordance with
              our Privacy Policy.
            </p>
            <br />
            <p>Third Party Content</p>
            <br />
            <p>
              We cannot and will not assure that other users are or will be
              complying with the foregoing rules or any other provisions of
              these Terms of Use, and, as between you and us, you hereby assume
              all risk of harm or injury resulting from any such lack of
              compliance.
            </p>
            <br />
            <p>
              You acknowledge that when you access a link that leaves the
              Platform, the site you will enter into is not controlled by us and
              different terms of use and Privacy Policy may apply. By assessing
              links to other sites, you acknowledge that we are not responsible
              for those sites. We reserve the right to disable links to and / or
              from third-party sites to the Platform, although we are under no
              obligation to do so.
            </p>
            <br />
            <p>Severability</p>
            <br />
            <p>
              If any of these Terms of Use should be determined to be illegal,
              invalid or otherwise unenforceable by reason of the laws of any
              state or country in which these Terms of Use are intended to be
              effective, then to the extent and within the jurisdiction where
              that term is illegal, invalid or unenforceable, it shall be
              severed and deleted and the remaining Terms of Use shall survive,
              remain in full force and effect and continue to be binding and
              enforceable.
            </p>
            <br />
            <p>Non-assignment</p>
            <br />
            <p>
              You shall not assign or transfer or purport to assign or transfer
              the contract between you and us to any other person. Governing law
              and dispute resolution
            </p>
            <br />
            <p>
              These Terms of Use are governed by the laws of India. Any action,
              suit, or other legal proceeding, which is commenced to resolve any
              matter arising under or relating to this Platform, shall be
              subject to the jurisdiction of the courts at Bangalore, India.
            </p>
            <br />
            <br />
            <h2>Contact Us</h2>
            Please contact us at support@etark.in for any questions or comments
            (including all inquiries unrelated to copyright infringement)
            regarding this Platform.
            <p>
              Grievance Officer/Nodal Officer In accordance with (1) Information
              Technology Act, 2000 and rules made there under, and (2) Consumer
              Protection (E-Commerce) Rules 2020l the name and contact details
              of the Grievance Officer/Nodal Officer is provided below:
              <br />
              ETark Technology Private Limited
              <br />
              Reg Office: E- 201, Mall Enclave, <br />
              13 K.B. Sarani, Dum Dum, Kolkata - 700080
              <br />
              Phone: +91 - 8250778560
              <br />
              Email: support@etark.in
              <br />
              Time: Monday - Friday (9:00 - 17:00)
              <br />
            </p>
            <h2>Limitation of Liability</h2>
            <br />
            <br />
            <p>
              IN ADDITION TO OTHER LIMITATIONS AND EXCLUSIONS IN ETark'S
              CONDITIONS OF USE AND SALE, IN NO EVENT WILL WE OR OUR DIRECTORS,
              OFFICERS, EMPLOYEES, AGENTS OR OTHER REPRESENTATIVES BE LIABLE FOR
              ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES, OR ANY OTHER DAMAGES OF ANY KIND, ARISING OUT OF
              OR RELATED TO ETark. OUR TOTAL LIABILITY, WHETHER IN CONTRACT,
              WARRANTY, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE, WILL NOT
              EXCEED THE LAST MEMBERSHIP FEE YOU PAID. THESE EXCLUSIONS AND
              LIMITATIONS OF LIABILITY WILL APPLY TO THE FULLEST EXTENT
              PERMITTED BY LAW AND WILL SURVIVE CANCELLATION OR TERMINATION OF
              YOUR ETark SUPER MEMBERSHIP.
            </p>
            <br />
            <p>
              ETark reserves its right to alter/ withdraw/ extend any offers/
              promotions at any time without giving any prior notice & without
              assigning any reason whatsoever.
            </p>
            <br />
            <p>
              All disputes related to this ETark will be subject to the
              exclusive jurisdiction of the court of Kolkata only.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default terms;
