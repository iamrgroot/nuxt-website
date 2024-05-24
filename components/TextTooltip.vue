<template>
  <TooltipProvider :delay-duration="100">
    <Tooltip>
      <TooltipTrigger as-child>
        <slot name="trigger" />
      </TooltipTrigger>
      <TooltipContent side="bottom" :side-offset="8">
        <slot name="text" />
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
