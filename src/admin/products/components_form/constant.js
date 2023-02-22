import * as yup from 'yup';

export const inputImages = [0, 1, 2, 3, 4];
export const numberProperties = 4;
export const schema = yup.object().shape({
    name: yup
        .string()
        .required("Vui lòng nhập lại"),
    price: yup
        .number("Phải là kí tự số")
        .required("Vui lòng nhập lại")
        .positive("Giá trị là số dương")
        .typeError("Phải là kí tự số"),
    quantitySell: yup
        .number("Phải là kí tự số")
        .required("Vui lòng nhập lại")
        .positive("Giá trị là số dương")
        .integer("Số lượng là só nguyên")
        .typeError("Phải là kí tự số"),
    description: yup
        .string()
        .required("Vui lòng nhập lại"),
    brandNews: yup
        .string()
        .required("Vui lòng nhập lại"),
    from: yup
        .string()
        .required("Vui lòng nhập lại"),
    thumbnailUrl: yup
        .string()
        .required("Vui lòng nhập lại")
        .url("Trường này chứa đường dẫn"),
    images: yup.array()
        .of(
            yup.object().shape({
                thumbnailUrl: yup
                    .string()
                    .required("Nhập lại nhé")
                    .url("Trường này chứa đường dẫn"),
            }).required()
        ).required()
}).required();