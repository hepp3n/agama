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

import React from "react";
import { Button } from "@patternfly/react-core";
import Icon from "~/components/layout/Icon";
import { useTheme } from "~/context/theme";
import { _ } from "~/i18n";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      variant="plain"
      aria-label={isDark ? _("Switch to light theme") : _("Switch to dark theme")}
      onClick={toggleTheme}
    >
      <Icon name={isDark ? "light_mode" : "dark_mode"} />
    </Button>
  );
}
