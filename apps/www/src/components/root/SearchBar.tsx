"use client"

import { Button, Input } from "@nextui-org/react"
import { useSearchParams } from "next/navigation"
import { FormEvent, useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useRouter } from "next-nprogress-bar"

export default function SearchBar() {
    const router = useRouter()
    const [input, setInput] = useState(useSearchParams().get("q") ?? "")
    const submit = (e: FormEvent) => {
        e.preventDefault()
        router.push(input.length ? `/?q=${input}` : "/")
    }

    return (
        <form className="flex w-full items-center gap-2" onSubmit={submit}>
            <Input
                className="ml-auto sm:w-fit"
                classNames={{ inputWrapper: "border rounded-full" }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="search"
                placeholder="Search..."
                labelPlacement="outside"
                size="sm"
                startContent={<FaSearch className="mx-1" />}
            />
            <Button type="submit" className="h-8 rounded-full" color="primary">
                Search
            </Button>
        </form>
    )
}
