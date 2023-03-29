const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>

  </style>
  <link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
  <link href="css/theme.css" rel="stylesheet" type="text/css" media="all" />
  <link href="css/custom.css" rel="stylesheet" type="text/css" media="all" />
  <footer class="footer-3 text-center-xs space--xs">
    <div class="container">
        <div class="row">
            <div class="col-sm-6"> <img alt="Image" class="logo" src="img-custom/logo/sjtuaaf-logo-1-dark.png">
                <ul class="list-inline list--hover">
                    <li> <a href="#"><span class="type--fine-print">contact@alumni.sjtu.fr</span></a> </li>
                </ul>
            </div>
            <div class="col-sm-6 text-right text-center-xs">
                <ul class="social-list list-inline list--hover">
                    <li><i class="socicon socicon-google icon icon--xs"></i></li>
                    <li><i class="socicon socicon-twitter icon icon--xs"></i></li>
                    <li><i class="socicon socicon-facebook icon icon--xs"></i></li>
                    <li><i class="socicon socicon-instagram icon icon--xs"></i></li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <span class="type--fine-print"> Design &amp; Code by <a href="mailto:qihui.yu0811@gmail.com">qihui.yu</a> in Paris</span>
            </div>
            <div class="col-sm-6 text-right text-center-xs"> 
                <p class="type--fine-print">© 
                    <span class="update-year">2011-2023</span> 
                    上海交通大学法国校友会
                </p> 
            </div>
        </div>
    </div>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);