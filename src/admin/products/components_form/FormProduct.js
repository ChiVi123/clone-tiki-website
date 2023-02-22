import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import slugify from "slugify";

import * as Form from "../../components/form";
import * as actions from "../../../app/features/productSlice";
import * as Selector from "../../../app/selector";
import * as constant from "./constant";
import * as hook from "./hook";
import { useNavigate } from "react-router";

function FormProduct({ action }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let productDetail = useSelector(Selector.productsSelector.productDetail) || {
    images: [],
  };
  const categories = useSelector(Selector.categorySelector.category);

  // Action is add product => product all properties default value is empty
  if (action === "add")
    productDetail = {
      images: [],
    };

  const isProductDetail = hook.isObjectEmpty(productDetail);

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
    register,
  } = hook.useConfigForm(productDetail);

  const handleOnSubmit = (data) => {
    isProductDetail
      ? dispatch(
          actions.addProduct({
            ...data,
            url_path: slugify(data.name),
          })
        )
      : dispatch(
          actions.updateProduct({
            ...data,
            url_path: slugify(data.name),
          })
        );

    Swal.fire({
      title: isProductDetail
        ? "Thêm sản phẩm thành công"
        : "Sửa sản phẩm thành công",
      icon: "success",
      confirmButtonColor: "#1e90ff",
      confirmButtonText: "Xác nhận",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/admin/products", { replace: true });
      }
    });
  };

  return (
    <Form.Wrapper>
      <Form.Header context={isProductDetail ? "Add Product" : "Edit Product"} />
      <div className={clsx("grid", "grid-cols-2", "gap-2")}>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          {/* id */}
          <Form.Group.FormGroupText
            control={control}
            name={"id"}
            type="text"
            messageError={errors.name?.message}
            watch={watch}
            setValue={setValue}
            Component={Form.Input.InputText}
            context={"Product id"}
            hidden={true}
          />

          {/* name */}
          <Form.Group.FormGroupText
            control={control}
            name={"name"}
            type="text"
            messageError={errors.name?.message}
            watch={watch}
            setValue={setValue}
            Component={Form.Input.InputText}
            context={"Product name"}
          />

          {/* price */}
          <Form.Group.FormGroupText
            control={control}
            name={"price"}
            type="number"
            messageError={errors.price?.message}
            watch={watch}
            setValue={setValue}
            Component={Form.Input.InputText}
            context={"Product price"}
          />

          {/* quantitySell */}
          <Form.Group.FormGroupText
            control={control}
            name={"quantitySell"}
            type="number"
            messageError={errors.quantitySell?.message}
            watch={watch}
            setValue={setValue}
            Component={Form.Input.InputText}
            context={"Product quantity"}
          />

          {/* description */}
          <Form.Group.FormGroupText
            control={control}
            name={"description"}
            type="text"
            messageError={errors.description?.message}
            watch={watch}
            setValue={setValue}
            Component={Form.Input.TextArea}
            context={"Product description"}
          />

          {/* quantitySell */}
          <Form.Group.FormGroupText
            control={control}
            name={"brandNews"}
            type="text"
            messageError={errors.brandNews?.message}
            watch={watch}
            setValue={setValue}
            Component={Form.Input.InputText}
            context={"brandNews"}
          />

          <label className="block mb-1">Categories</label>
          {/* categories */}
          <select
            className={clsx(
              "border",
              "rounded-t-md",
              "outline-none",
              "w-80",
              "h-8",
              "mb-8"
            )}
            {...register("categoryId")}
          >
            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          {/* from */}
          <Form.Group.FormGroupText
            control={control}
            name={"from"}
            type="text"
            messageError={errors.from?.message}
            watch={watch}
            setValue={setValue}
            Component={Form.Input.InputText}
            context={"From"}
          />

          {/* thumbnailUrl */}
          <Form.Group.FormGroupText
            control={control}
            name={"thumbnailUrl"}
            type="text"
            messageError={errors.thumbnailUrl?.message}
            watch={watch}
            setValue={setValue}
            Component={Form.Input.InputText}
            context={"Product thumbnail"}
          />

          {/* images */}
          {constant.inputImages.map((item, index) => (
            <Form.Group.FormGroupText
              key={item}
              control={control}
              name={`images.${item}.thumbnailUrl`}
              type="text"
              messageError={
                errors.images && errors.images[index]?.thumbnailUrl.message
              }
              watch={watch}
              setValue={setValue}
              Component={Form.Input.InputText}
              context={`images thumbnail ${item}`}
            />
          ))}

          <Form.Input.Submit />
        </form>

        {/* Show Images */}
        <div className={clsx("grid", "grid-cols-2", "gap-2")}>
          <img
            src={watch("thumbnailUrl")}
            alt="thumbnailUrl"
            width={180}
            height={180}
            className={clsx("border", "rounded-md")}
          />

          {constant.inputImages.map((item) => (
            <img
              key={item}
              src={watch(`images.${item}.thumbnailUrl`)}
              alt={`images.${item}.thumbnailUrl`}
              width={180}
              height={180}
              className={clsx("border", "rounded-md")}
            />
          ))}
        </div>
      </div>
    </Form.Wrapper>
  );
}

FormProduct.isFormLayout = "layoutForm";

export default FormProduct;
