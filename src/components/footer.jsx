import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer class="footer mt-auto py-3">
        <div class="card">
          <div class="card-header">Quote</div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>Before software can be reusable it first has to be usable.</p>
              <footer class="blockquote-footer">Ralph Johnson </footer>
            </blockquote>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
