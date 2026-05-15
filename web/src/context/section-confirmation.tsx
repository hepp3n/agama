/*
 * Copyright (c) 2026 Shawn W Dunn <sfalken@kalpadesktop.org>
 *
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the Free
 * Software Foundation; either version 2 of the License, or (at your option)
 * any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for
 * more details.
 */

import React, { createContext, useCallback, useContext, useState } from "react";

type SectionConfirmationContextType = {
  confirmedSections: Set<string>;
  confirmSection: (section: string) => void;
};

const SectionConfirmationContext = createContext<SectionConfirmationContextType>({
  confirmedSections: new Set(),
  confirmSection: () => {},
});

function SectionConfirmationProvider({ children }: React.PropsWithChildren) {
  const [confirmedSections, setConfirmedSections] = useState<Set<string>>(new Set());

  const confirmSection = useCallback((section: string) => {
    setConfirmedSections((prev) => {
      if (prev.has(section)) return prev;
      return new Set([...prev, section]);
    });
  }, []);

  return (
    <SectionConfirmationContext.Provider value={{ confirmedSections, confirmSection }}>
      {children}
    </SectionConfirmationContext.Provider>
  );
}

function useSectionConfirmation() {
  return useContext(SectionConfirmationContext);
}

export { SectionConfirmationProvider, useSectionConfirmation };
