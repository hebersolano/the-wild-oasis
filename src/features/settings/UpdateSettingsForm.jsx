import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useGetSettings, useUpdateSetting } from "./useSettingsHook";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";

function UpdateSettingsForm() {
  const { settings = {}, isLoading } = useGetSettings();
  const { minBookingLength, maxBookingLength, maxGuestsPerBooking, breakfastPrice } = settings;

  const { updateSetting, isUpdating } = useUpdateSetting();
  const { register, handleSubmit } = useForm();
  console.log(settings);

  function submitHandler(data) {
    console.log("Settings to submit", data);
    updateSetting(data);
  }

  if (isLoading) return <Spinner />;

  return (
    <Form onSubmit={handleSubmit(submitHandler)}>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="minBookingLength"
          defaultValue={minBookingLength}
          disabled={isUpdating}
          {...register("minBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="maxBookingLength"
          defaultValue={maxBookingLength}
          disabled={isUpdating}
          {...register("maxBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="maxGuestsPerBooking"
          defaultValue={maxGuestsPerBooking}
          disabled={isUpdating}
          {...register("maxGuestsPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfastPrice"
          defaultValue={breakfastPrice}
          disabled={isUpdating}
          {...register("breakfastPrice")}
        />
      </FormRow>
      <FormRow>
        <Button>Save</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
