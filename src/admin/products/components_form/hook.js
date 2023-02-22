import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as constant from './constant';

export function isObjectEmpty(object) {
    return (Object.keys(object).length < constant.numberProperties);
};

export function useConfigForm(product) {
    return useForm({
        defaultValues: {
            id: product.id,
            name: product.name,
            price: product.price,
            quantitySell: product.quantitySell,
            description: product.description,
            brandNews: product.brandNews,
            from: product.from,
            thumbnailUrl: product.thumbnailUrl,
            images: [
                {
                    thumbnailUrl: product?.images[0]?.thumbnailUrl
                },
                {
                    thumbnailUrl: product?.images[1]?.thumbnailUrl
                },
                {
                    thumbnailUrl: product?.images[2]?.thumbnailUrl
                },
                {
                    thumbnailUrl: product?.images[3]?.thumbnailUrl
                },
                {
                    thumbnailUrl: product?.images[4]?.thumbnailUrl
                },
            ],
            categoryId: product?.categoryId
        },
        resolver: yupResolver(constant.schema),
        mode: 'onSubmit',
    });
};