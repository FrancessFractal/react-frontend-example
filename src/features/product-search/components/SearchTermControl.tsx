import { TextField } from "@radix-ui/themes";
import { ChangeEventHandler, useCallback, useMemo } from "react";
import debounce from 'lodash.debounce';
import { useChangeSearchTerm } from "../state-hooks/useChangeSearchTerm";

export function SearchTermControl() {
    const { mutate } = useChangeSearchTerm()
    const changeSearchTerm = useMemo(() => debounce(mutate, 500), [mutate])

    const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
        event.preventDefault()
        changeSearchTerm(event.target.value)
    }, [changeSearchTerm])

    return <TextField.Root onChange={handleChange} placeholder="Search..." />
}