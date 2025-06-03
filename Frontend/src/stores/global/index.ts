import { useCommunityStore } from "./community.store";
import { useMeStore } from "./me.store";

export namespace GlobalStores{
    export const community = useCommunityStore
    export const me = useMeStore
}