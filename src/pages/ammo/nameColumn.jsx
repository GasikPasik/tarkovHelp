import React, { useState } from "react";
import styles from "./nameColumn.module.css"

export default function NameColumn({ children, callback }) {

    const [sorting_filter, set_sorting_filter] = useState("");

    function updateSortingFilter(value){
      set_sorting_filter(value);
    }

    return (
      <div>
      </div>

    );

  }