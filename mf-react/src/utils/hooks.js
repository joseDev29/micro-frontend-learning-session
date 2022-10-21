import { useState, useEffect } from "react";

export const errorNotification = (error) => {
  console.error(error.response ? error.response.data.message : error.message);
};

export const useGet = (
  axiosFunc,
  variables = undefined,
  { isObj, cancelFirstEffect, cancelErrorNotification, onError } = {}
) => {
  const defData = isObj ? {} : [];

  const [req, setReq] = useState({
    data: defData,
    loading: false,
    error: false,
  });

  useEffect(() => {
    if (!cancelFirstEffect) {
      getData();
    }
  }, [cancelFirstEffect]);

  const getData = async (newVariables) => {
    /**
     * Ignores the new variables if they're provided by a React synthetic event
     */
    const axiosFunctionVariables =
      !newVariables || !!newVariables?._reactName ? variables : newVariables;

    setReq({ data: defData, loading: true, error: false });
    try {
      const { data } = await axiosFunc(axiosFunctionVariables);
      setReq({ data, loading: false, error: false });
    } catch (error) {
      if (!cancelErrorNotification) {
        errorNotification(error);
      }
      setReq({ data: defData, loading: false, error });
      if (onError) {
        onError(error);
      }
    }
  };

  return { ...req, refetch: getData };
};
