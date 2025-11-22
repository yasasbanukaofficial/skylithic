import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A line chart";

const chartData = [
  { day: "Sunday", wind: 9 },
  { day: "Monday", wind: 12 },
  { day: "Tuesday", wind: 18 },
];

const chartConfig = {
  desktop: {
    label: "Weather",
    color: "var(--chart-2)",
  },
};

export function ChartLineDefault() {
  return (
    <Card>
      <CardHeader className={"p-0"}>
        <p className="text-cards text-white/40">25%</p>
      </CardHeader>
      <CardContent className={"p-0"}>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 30,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="wind"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={4}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
