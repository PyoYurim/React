import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increase } from './../store/userSlice.js'
import { addCount } from './../store.js'

function Cart() {

    let state = useSelector((state)=> state )
    let dispatch = useDispatch()
    return (
        <div>
            <h6>{state.user.name} {state.user.age}의 장바구니</h6>
            <button onClick = {()=>{dispatch(increase(100))}}>버튼</button>
            {/* 표를 만들고 싶을떄 */}
            <Table>
                <thead>
                    <tr> 
                        <th>#</th> 
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th> 
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a, index)=>
                        <tr key={index}>
                            <td>{state.cart[index].id}</td>
                            <td>{state.cart[index].name}</td>
                            <td>{state.cart[index].count}</td>
                            <td>
                                <button onClick={()=>{
                                    dispatch(addCount(state.cart[index].id));
                                }}>+</button>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;