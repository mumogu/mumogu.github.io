const template = document.createElement('template');
template.innerHTML = `
    <style>
        span { 
            color: maroon; 
        }
    </style>
    <span>
        This is a Webcomponent! Answer is: 
    </span>
`;

export class TestComponent extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('span').innerHTML = this.getAttribute('answer');

        
    }
}
