const template = document.createElement('template');

template.innerHTML = `
<style>
main .card-wrapper {
    display: inline-flex;
    max-width: 260px;
    margin: 50px 30px;
    padding: 10px;
    border: 3px solid #fff;
    border-radius: 16px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    background: #fff;
  }
  main .card-wrapper .card {
    display: flex;
    flex-direction: column;
  }
  main .card-wrapper .card .card-img-wrapper {
    display: flex;
    justify-content: center;
  }
  main .card-wrapper .card .card-img-wrapper .card-img {
    max-height: 250px;
    max-width: 230px;
  }
  main .card-wrapper .card .card-description-wrapper {
    padding: 10px;
    display: flex;
    height: 80px;
  }
  main .card-wrapper .card .card-description-wrapper .card-description {
    height: 100%;
    overflow-y: scroll;
    color: gray;
    text-overflow: ellipsis;
  }
  main .card-wrapper .card .card-description-wrapper .card-description::-webkit-scrollbar {
    width: 12px;
    background-color: #F5F5F5;
  }
  main .card-wrapper .card .card-description-wrapper .card-description::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }
  main .card-wrapper .card .card-description-wrapper .card-description::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: gray;
  }
  main .card-wrapper .card .card-btn-wrapper {
    padding: 10px;
    display: flex;
    height: 40px;
    position: relative;
  }
  main .card-wrapper .card .card-btn-wrapper .card-btn {
    position: absolute;
    right: 0;
    margin: 10px;
    border: 2px solid gray;
    align-items: center;
    font-weight: bold;
    color: gray;
    height: 40px;
    background-color: transparent;
    border-radius: 8px;
  }
  main .card-wrapper .card .card-btn-wrapper .card-btn:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  main .card-wrapper .card .card-btn-wrapper .card-btn:focus {
    outline-color: transparent;
  }
  main .card-wrapper .card .card-btn-wrapper .card-btn:active {
    color: gray;
  }
</style>
<div class="card-wrapper">
    <div class="card">
        <div class="card-img-wrapper">
            <img src="../Images/Iphone-12-pro-blue.png" alt="" class="card-img">
        </div>

        <div class="card-description-wrapper">
            <span class="card-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus placeat ratione nihil dolor quibusdam in quasi veritatis, tempore deserunt delectus itaque dicta quod neque eos asperiores, est eveniet aliquid esse.
            </span>
        </div>

        <div class="card-btn-wrapper">
            <button class="card-btn" type="button">
                Add to baasket
            </button>
        </div>
    </div>           
</div>
`;

class SellCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    } 
   
    connectedCallback(){
        
      this.render();
    }
   
    render(){
      this
    }
}

window.customElements.define('sell-card', SellCard);