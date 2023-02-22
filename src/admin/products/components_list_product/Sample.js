import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';

import ProductData from './ProductData';
import ProductImage from './ProductImage';
import { Data } from '../../components'
import { IconEdit, IconDelete } from '../../components/icons';
import {
    deleteProduct,
    getProductDetail
} from '../../../app/features/productSlice';
import { Link } from 'react-router-dom';


function Sample({ product, index }) {
    const dispatch = useDispatch();

    const handleEdit = (id) => dispatch(getProductDetail(id));
    const handleDelete = (product, index) => {
        Swal.fire({
            title: "Xóa sản phẩm",
            text: `Bạn có muốn xóa sản phẩm ${product.name}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Xác nhận!",
            cancelButtonText: "Hủy",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteProduct({
                    id: product.id,
                    index
                }));
                Swal.fire("Đã xóa thành công", "", "success");
            }
        });
    };

    return (<tr index-data={product.id}>
        <Data><div className="min-w-[3rem]">
            <ProductImage img={product.thumbnailUrl} name={product.name} />
        </div></Data>

        <Data><ProductData data={product.name} /></Data>

        <Data>{product.description}</Data>

        <Data><div
            className="min-w-[4rem] flex items-center justify-between"
        >
            <Link
                onClick={() => handleEdit(product['url_path'])}
                to={"/admin/products/edit"}
            >
                <IconEdit />
            </Link>

            <button
                onClick={() => handleDelete(product, index)}
            >
                <IconDelete />
            </button>
        </div></Data>
    </tr>);
};

export default Sample;