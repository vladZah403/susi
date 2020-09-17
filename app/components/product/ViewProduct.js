export default class ViewProduct{
   constructor(handleS){
       this.articles = document.querySelector('.articles');
       this.inputSearch = document.querySelector('.inp-search');
       this.formSearch = document.querySelector('.form-search');

       this.handleS = handleS;
   
   }
   renderArticles(product){
      this.articles.innerHTML = product.map(ev=> this.articleString(ev)).join('');
      this.articles.addEventListener('click', this.handleS);
   }

   articleString({id,Title,Description, Prise, Photo, Weight, }){
      return`
      <div class="card mt-5 m-3 shadow p-3 mb-5 bg-white rounded" style="width: 21rem;">
      <img src="${Photo}" class="card-img-top" width="80" height="250" >
      <div class="card-body ">
        <h5 class="card-title">${Title}</h5>
        <p class="card-text">Состав: ${Description}</p>
        <h4 class="">${Prise} &#8372</h4>
        <h4 class="">${Weight}  г.</h4>
      
        <button data-product-id="${id}" type="button" class="btn btn-secondary badge-primary">В корзину</button>

      </div>
    </div>`
   }

   
   get searchVal(){
      return this.inputSearch.value;
   }
} 