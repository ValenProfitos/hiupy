/* eslint-disable react/prop-types */
export const SearchBar = ({placeholder}) => {

    return (
        <div className=" flex w-full rounded-xl border border-light-grey">
            <div className="self-center p-1">
                <img src="/assets/images/search.svg" alt="search-icon"  />
            </div>
            <input type="text" placeholder={placeholder} className="placeholder:text-xs bg-transparent w-10/12 text-xs outline-none py-3 border-none" />
            {/* <input type="text" placeholder={placeholder} className="placeholder:text-xs bg-transparent w-10/12 text-xs outline-none py-3" /> */}
        </div>
    )
};