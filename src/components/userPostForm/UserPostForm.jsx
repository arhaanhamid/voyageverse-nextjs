import styles from "@/components/userPostForm.module.css";
import { uploadData } from "@/lib/action";

function UserPostForm({ userId }) {
  return (
    <div className={styles.form_container}>
      <form action={uploadData} className={styles.form}>
        <div className={styles.form_group}>
          <input type="text" id="title" name="title" placeholder="Title..." />
          <input type="hidden" name="userId" value={userId} />
        </div>
        <div className={styles.form_group}>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            cols="50"
            defaultValue="Description..."
          ></textarea>
        </div>
        <div className="text-black">
          <select name="location" defaultValue="">
            <option value="" hidden disabled>
              Select Location
            </option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="japan">Japan</option>
          </select>
        </div>

        <div className="col-span-full">
          <div className="flex justify-center rounded-lg border border-dashed border-gray-300/25 px-6 py-5">
            <div className="text-center">
              <svg
                className="mx-auto h-16 w-16 text-gray-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="mt-4 flex text-sm leading-6 text-gray-300">
                <label
                  htmlFor="images"
                  className="relative cursor-pointer rounded-md  font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="images"
                    name="images"
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    multiple
                  />
                  {/* <inputs
                    type="file"
                    name="images"
                    required
                  /> */}
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-300">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
        <button className={styles.form_submit_btn} type="submit">
          Submit
        </button>
      </form>
    </div>

    //   <form action={uploadImage} className={styles.container}>
    //   <input type="hidden" name="userId" value={userId} />
    //   <input type="text" name="title" placeholder="Title" />
    //   <textarea type="text" name="desc" placeholder="desc" rows={10} />

    //   <select name="location" defaultValue="">
    //     <option value="" hidden disabled>
    //       Select Location
    //     </option>
    //     <option value="india">India</option>
    //     <option value="usa">USA</option>
    //     <option value="japan">Japan</option>
    //   </select>

    //   <input type="file" name="images" multiple accept="image/*" required />
    //   <button>Submit</button>
    // </form>
  );
}

export default UserPostForm;
