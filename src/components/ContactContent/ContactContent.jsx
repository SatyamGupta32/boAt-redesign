import React from "react";
import "./ContactContent.css";

const ContactContent = () => {
  return (
    <div className="contact-container">
      <div className="top-content">
        {" "}
        <div className="contact-heading">Contact Us</div>
        <div className="para">Public Feedback Interference</div>
      </div>
      <div className="content-1">
        <div className="para-2">
          Security researchers can notify boAt of security vulnerabilities in
          devices.
        </div>
        <div className="site contact-link">
          <p>
            boAt official website:{" "}
            <span className="red-text">http://www.boat-lifestyle.com</span>
          </p>
          <p>
            Contact on mail website:{" "}
            <span className="red-text">security@imaginemarketingindia.com</span>
          </p>
        </div>
        <div className="para">
          Security Report From Independent Security Expert
        </div>
        <div className="para-2">
          boAt has signed a partnership with a Security Corporation, which will
          provide a security test report for boAt’s devices.
        </div>
        <div className="para">Software Vulnerability Monitoring</div>
        <div className="para-2">
          Monitor the public information of the following websites through
          regular and continuous monitoring.
        </div>
        <div className="site">
          <p>
            CVE: <span className="red-text">(http://cve.mitre.org/)</span>
          </p>
          <p>
            NVD: <span className="red-text">(http://nvd.mniste.gov/)</span>
          </p>
          <p>
            CWE: <span className="red-text">(http://cwe.mitre.org/)</span>
          </p>
        </div>
        <div className="para">Software Maintenance Update Strategy</div>
      </div>
      <div className="down-content">
        <div className="para-2 down-desc">
          <div className="define">
            {" "}
            <span>
              {" "}
              There will be monitoring of version updates for third-party
              components. This will be followed by updating to the latest
              version to avoid the existence of known vulnerabilities. Mending
              for severity vulnerabilities will be bundled in existing updates.
            </span>
            <span>
              When any vulnerability is identified, update the firmware as
              follows:
            </span>
          </div>
          <div className="points">
            <span className="point">
              <span className="num">1.</span>{" "}
              <p className="list-desc ">Vulnerabilities are identified by customers, users, etc. </p>{" "}
            </span>
            <span className="point">
              <span className="num">2.</span>{" "}
              <p className="list-desc ">
                A security related review meeting must be held immediately and
                the corresponding solution should be presented. The participants
                of the meeting must include project development manager,
                Technical Director and outside party who is responsible for
                firmware development. CVSSv2 will be used as a reference
                standard for assessing and prioritizing
                vulnerability/vulnerabilities.{" "}
              </p>{" "}
            </span>
            <span className="point">
              <span className="num">3.</span>{" "}
              <p className="list-desc ">
                Based on the proposed solution, the developer shall perform
                specific implementation/implementations.{" "}
              </p>{" "}
            </span>
            <span className="point">
              <span className="num">4.</span>{" "}
              <p className="list-desc ">
                Code will be reviewed. Reviewers should include security
                technology manager and project development.
              </p>{" "}
            </span>
            <span className="point">
              <span className="num">5.</span> <p className="list-desc ">Release of the updated firmware. </p>{" "}
            </span>
            <span className="point">
              <span className="num">6.</span>{" "}
              <p className="list-desc ">
                The QA team tests the updated firmware. If there are any
                problems in the updated firmware, go back to step three. If the
                testing is successful, move to step seven.
              </p>{" "}
            </span>
            <span className="point">
              <span className="num">7.</span> <p className="list-desc ">Updated code is merged into trunk branch. </p>{" "}
            </span>
            <span className="point">
              <span className="num">8.</span>{" "}
              <p className="list-desc ">
                The project manager notifies customers that they need to update
                the software and get confirmation from the customer/customers on
                the upgrade.
              </p>{" "}
            </span>{" "}
            <span className="point">
              <span className="num">9.</span> <p className="list-desc ">Perform OTA on the corresponding project. </p>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
