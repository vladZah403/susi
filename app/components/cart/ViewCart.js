export default class ViewCart{
    domCartCount = document.querySelector('.cart_count');
    modalWindow =document.querySelector('.modal_r');
    btnCart = document.querySelector('.cart');
    closeClass = 'close_r'

    constructor(hendleOpenModal){
        this.btnCart.addEventListener('click',hendleOpenModal )
        
    }
    renderCartCaunt(count){
        this.domCartCount.innerText = count;
    }

    renderModal(){
        this.modalWindow.classList.remove(this.closeClass);
        this.modalWindow.innerHTML=` <div class="modal-dialog ">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table table-striped">
              
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td><input type="number" min="0" class="inp_product_cart"></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td><input type="number" min="0" class="inp_product_cart"></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td><input type="number" min="0" class="inp_product_cart"></td>
                </tr>
              
              </tbody>
            </table>
          </div> 
           <span class="sum  text-center mr-4">Сумма: <span class="modal_cart_sum"></span></span>
          <div class="modal-footer">
            
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>`
    }
}