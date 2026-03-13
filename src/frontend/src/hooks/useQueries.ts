import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { CV, EducationEntry, ExperienceEntry } from "../types/cv";
import { useActor } from "./useActor";

export function useGetCV() {
  const { actor, isFetching } = useActor();
  return useQuery<CV | null>({
    queryKey: ["cv"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getCV();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUpdateCV() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      cv,
      templateId,
    }: {
      cv: CV;
      templateId: number;
    }) => {
      if (!actor) throw new Error("Actor not available");
      await Promise.all([
        actor.updateCV(
          cv.fullName,
          cv.jobTitle,
          cv.summary,
          cv.email,
          cv.phone,
          cv.location,
          cv.website,
          cv.education as EducationEntry[],
          cv.experience as ExperienceEntry[],
          cv.skills,
        ),
        actor.selectTemplate(BigInt(templateId)),
      ]);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cv"] });
    },
  });
}
