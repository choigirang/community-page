const contents = document.querySelector('ul.commentContainer')
const btns = document.querySelector('')

const allContents = agoraStatesDiscussions.length // 41
const showContent = 10 // 보여줄 컨텐츠 갯수
const showBtn = 5 // 보여질 버튼 갯수
const pageNum = Math.ceil(allContents / showContent) // 4.1 => 5
let page = 1 // 현재 페이지

const makeBtn = (id) => {
    const btn = document.createElement('button');
    btn.classList.add("pageBtn")
    btn.dataset.num = id
    btn.innerText = id
    btn.addEventListener('click',(e) => {
        Array.prototype.call(btns.children, (btn) => {
            if(btn.dataset.num){
                btn.classList.remove("show")
            }else{
                e.target.classList.add("show")
            }
        })
    })
}