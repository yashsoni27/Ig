import { View, Text } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, formik } from "formik";

const PLACEHOLDER_IMG = "";

const UploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, "Caption has reached the charachter limit."),
});

const FormikPostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={UploadPostSchema}
    >
        
    </Formik>
  );
};

export default FormikPostUploader;
