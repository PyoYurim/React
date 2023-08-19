import { useParams } from "react-router-dom";
import Header from "../../header/Header";
import data from "./BestDetailData"; // 수정: 경로 변경
import "../../component/best/Detail.css";

function Detail() {
    const { id } = useParams(); // useParams 훅을 사용하여 id를 추출합니다.

    // id와 일치하는 제품을 찾습니다.
    const product = data.find(item => item.id === parseInt(id, 10));

    // 제품이 존재하지 않는 경우 처리
    if (!product) {
        return (
            <div className="product">
                <div className="header1">
                    Our flying start!
                </div>
                <Header />
                <div>
                    <p>제품을 찾을 수 없습니다.</p>
                </div>
            </div>
        );
    }
    return (
        <>
        <div className="header1">
                Our flying start!
            </div>
            <Header />
          <main className='main'>
            <section className='product'>
              <div className='product_img'>
              <img src={`/images/best/${product.id}.png`} alt={`Product ${product.id}`} />
              </div>
            </section>
            <section className='product'>
              <div className='product_info'>
                <p className='product_name'>{product.title}</p>
                <p className="product_content">{product.content}</p>
                <span className='price'>
                    {product.price}
                  <span className='unit'>원</span>
                </span>
              </div>
    
              <div className='line'></div>
    
              <div className='amount'>
                <img
                  className='minus'
                  src="/images/icon/icon-minus-line.svg"
                  alt="minus"
                />
    
                <div className='count'>
                  <span>1</span>
                </div>
    
                <img
                  className='plus'
                  src="/images/icon/icon-plus-line.svg"
                  alt="plus"
                />
              </div>
    
              <div className='line'></div>
    
              <div className='sum'>
                <div>
                  <span className='sum_price'>총 상품 금액</span>
                </div>
    
                <div className='total_info'>
                  <span className='total'>
                    총 수량 <span className='total_count'>1개</span>
                  </span>
                  <span className='total_price'>
                    1000
                    <span className='total_unit'>원</span>
                  </span>
                </div>
              </div>
    
              <div className='btn'>
                <button className='btn_buy'>바로 구매</button>
                <button className='btn_cart'>장바구니</button>
              </div>
            </section>
          </main>
        </>
      );

    
}

export default Detail;
