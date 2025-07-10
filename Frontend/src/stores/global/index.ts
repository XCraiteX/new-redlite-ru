import { useCommunityStore } from "./community.store";
import { useMeStore } from "./me.store";
import { useAnimationStore } from "../animation";

export namespace GlobalStores{
    export const community = useCommunityStore;
    export const animation = useAnimationStore;
    export const me = useMeStore;
}