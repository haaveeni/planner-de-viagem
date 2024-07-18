import { CircleDashed, CircleCheck, UserCog } from "lucide-react";
import Button from "../../components/button";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="space-y-1.5">
            <span className="block text-sm text-zinc-100">Jéssica White</span>
            <span className="block text-xs text-zinc-400">
              jessica.white44@yahoo.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5" />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1.5">
            <span className="block text-sm text-zinc-100">
              Dr. Rita Pacocha
            </span>
            <span className="block text-xs text-zinc-400">
              lacy.stiedemann@gmail.com
            </span>
          </div>
          <CircleCheck className="text-lime-300 size-5" />
        </div>
      </div>

      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  );
}
