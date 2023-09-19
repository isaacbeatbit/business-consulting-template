'use client';
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

export const RecoilWrapper = ({ children }: { children: ReactNode }) => (
  <RecoilRoot>{children}</RecoilRoot>
);
